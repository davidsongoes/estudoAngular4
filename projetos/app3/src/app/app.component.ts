import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public configFirebase = {
    apiKey: "AIzaSyCGiqHUegVErgu9gSJVpZEgs0jYPb1a_10",
    authDomain: "jta-instagram-clone-86f91.firebaseapp.com",
    databaseURL: "https://jta-instagram-clone-86f91.firebaseio.com",
    projectId: "jta-instagram-clone-86f91",
    storageBucket: "jta-instagram-clone-86f91.appspot.com",
    messagingSenderId: "679543468650"
  }

  ngOnInit(): void {
    firebase.initializeApp(this.configFirebase)
  }
}
