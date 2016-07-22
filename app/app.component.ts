import { Component } from '@angular/core';

import { MovieListComponent } from './movies/movie-list.component';

@Component({
  selector: 'my-app',
  template: `<h1>
                Lunch 'N Learn
            </h1>
            <app-movies></app-movies>`,
  directives: [MovieListComponent]
})
export class AppComponent {
}