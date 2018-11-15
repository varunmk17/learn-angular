import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBGDeDFQnjzPTHZEaQGvOpge_8nOi7F9DI",
      authDomain: "avakas-recipe-book.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
