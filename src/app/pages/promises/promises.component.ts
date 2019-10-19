import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.countToThree() 
      .then( response => console.log('Promise finish:', response))
      .catch( err => console.error('Promise error:', err));
   }

  ngOnInit() {
  }

  countToThree(): Promise<boolean> {
    return new Promise( (res, rej) => {
      let counter = 0;

      let interval = setInterval( () => {
        counter += 1;  
        console.log(counter);

        if ( counter === 3 ) {
          res( true );
          clearInterval(interval);
        }
      }, 1000);
    });    
  }
}
