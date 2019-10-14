import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.setCheck();
  }

  changeColorTheme ( theme: string, link: any ) {
    this.markSelectedTheme( link );

    this._settings.applyTheme( theme );
  }

  markSelectedTheme ( link: any ) {
    let selectors: any = document.getElementsByClassName('selector');
    
    for ( let ref of selectors ) {
      ref.classList.remove('working');
    }
    
    link.classList.add('working');
  }
  
  setCheck () {
    let selectors: any = document.getElementsByClassName('selector');
    
    let theme = this._settings.settings.theme;
    
    for ( let ref of selectors ) {
      if ( ref.getAttribute('data-theme') === theme  ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
