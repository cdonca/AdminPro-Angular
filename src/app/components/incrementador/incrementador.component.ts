import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; 

  @Input('title') legend: string = 'Leyenda';
  @Input() progress: number = 50;

  @Output('valueUpdate') valueChange: EventEmitter <number> = new EventEmitter();

  constructor() { }
  
  ngOnInit() {}

  onChange ( newValue: number ) {
    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;
    this.valueChange.emit( this.progress );
  }

  changeProgress ( value: number ) {
    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress += value;
    this.valueChange.emit( this.progress );
    this.txtProgress.nativeElement.focus();
  }

}
