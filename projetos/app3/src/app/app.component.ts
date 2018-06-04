import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { ConfigFirebase } from './config-firebase.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  public configFirebase: ConfigFirebase = new ConfigFirebase()

  ngOnInit(): void {
    firebase.initializeApp(this.configFirebase)
  }
}
