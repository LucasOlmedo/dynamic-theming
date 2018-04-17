import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class SettingsProvider {

    private theme: BehaviorSubject<String> = new BehaviorSubject('light-theme');

    constructor(private storage: Storage) {
        this.storage.get('theme')
            .then(value => {
                if (value) {
                    this.theme.next(value);
                } else {
                    this.storage.set('theme', 'light-theme');
                }
            });
    }

    setActiveTheme(val) {
        this.storage.set('theme', val)
            .then(value => {
                this.theme.next(value);
            });
    }

    getActiveTheme() {
        return this.theme.asObservable();
    }
}