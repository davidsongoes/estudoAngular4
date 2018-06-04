import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { ConfigFirebase } from './config-firebase.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public configFirebase: ConfigFirebase = new ConfigFirebase()

  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp(this.configFirebase)
  }
}
