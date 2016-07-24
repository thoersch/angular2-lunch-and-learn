import { provideRouter, RouterConfig } from '@angular/router';

import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail.component';

const routes: RouterConfig = [
    { path: "", component: MovieListComponent },
    { path: "movies", component: MovieListComponent },
    { path: "movies/:id", component: MovieDetailComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];