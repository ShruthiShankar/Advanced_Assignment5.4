import { Component } from '@angular/core';
import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [Alert],
  template: `<alert type="info">ng2-bootstrap hello world!</alert>`
})
export class AppComponent {
 /* title = 'app works!';*/
}
