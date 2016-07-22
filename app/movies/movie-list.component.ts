import { Component } from '@angular/core';

import { Movie } from './movie';
import { MovieFilterPipe } from './movie-filter.pipe';

@Component({
    selector: 'app-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    pipes: [MovieFilterPipe]
})
export class MovieListComponent {
    nameFilter: string;
    movies: Movie[] = [{
        "id": 1,
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "image": "http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1._SX40_CR0,0,40,54_.jpg",
        "rating": 9.2
    },
    {
        "id": 2,
        "title": "12 Angry Men",
        "year": 1957,
        "director": "Sidney Lumet",
        "image": "http://ia.media-imdb.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1._SX40_CR0,0,40,54_.jpg",
        "rating": 8.9
    }];
}