import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'My First App Angular!';
	author = 'Diego Fernando';
	count = 0;
	imgSource = './../favicon.ico';
	enabled = true;
}
