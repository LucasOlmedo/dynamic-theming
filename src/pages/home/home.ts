import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  selectedTheme: String;

  constructor(
    public navCtrl: NavController,
    private settings: SettingsProvider,
    private toast: ToastController
  ) {
    this.settings.getActiveTheme()
      .subscribe(val => this.selectedTheme = val);
  }

  toggleAppTheme(theme) {
    this.settings.setActiveTheme(theme);

    let toast = this.toast.create({
      message: 'Theme changed',
      duration: 1500,
      position: 'top'
    });

    toast.present();
  }

}
