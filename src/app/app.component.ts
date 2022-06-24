import { Component, VERSION } from '@angular/core';
import { Store } from './common/store.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private store: Store) {
    this.store.init();
  }
}
