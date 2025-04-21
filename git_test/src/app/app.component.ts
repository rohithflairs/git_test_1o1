import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleTestComponentComponent } from './sample-test-component/sample-test-component.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SampleTestComponentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git_test';
}
