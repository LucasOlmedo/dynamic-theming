import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  selectedTheme: String;

  constructor(public navCtrl: NavController, private settings: SettingsProvider) {
    this.settings.getActiveTheme()
      .subscribe(val => this.selectedTheme = val);
  }

  toggleAppTheme(theme) {
    this.settings.setActiveTheme(theme);
  }

}
