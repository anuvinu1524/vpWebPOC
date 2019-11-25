import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vppoc';
  activeTab = 'claim';

  claim(activeTab){
    this.activeTab = activeTab;
  }

  patient(activeTab){
    this.activeTab = activeTab;
  }
  health(activeTab){
    this.activeTab = activeTab;
  }
}
