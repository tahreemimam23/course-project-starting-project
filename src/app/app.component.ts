import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe'
  constructor(){}
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
