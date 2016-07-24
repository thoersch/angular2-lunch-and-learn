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
    },
    {
        "id": 3,
        "title": "Star Trek: The Motion Picture",
        "year": 1979,
        "director": "Robert Wise",
        "image": "http://ia.media-imdb.com/images/M/MV5BNzE4MTY1MTMyN15BMl5BanBnXkFtZTcwMzk5MzI4OA@@._V1._SX40_CR0,0,40,54_.jpg",
        "rating": 6.4
    },
    {
        "id": 4,
        "title": "Ghostbusters",
        "year": 1984,
        "director": "Ivan Reitman",
        "image": "http://ia.media-imdb.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1._SX40_CR0,0,40,54_.jpg",
        "rating": 7.8
    },
    {
        "id": 5,
        "title": "Bloodsport",
        "year": 1988,
        "director": "Newt Arnold",
        "image": "http://ia.media-imdb.com/images/M/MV5BMTc0MzQ5Mzk2NV5BMl5BanBnXkFtZTcwOTY1OTEyMQ@@._V1._SX40_CR0,0,40,54_.jpg",
        "rating": 6.8
    },
    {
        "id": 6,
        "title": "Conan the Destroyer",
        "year": 1984,
        "director": "Richard Fleischer",
        "image": "http://ia.media-imdb.com/images/M/MV5BMTM2NTEwODA3M15BMl5BanBnXkFtZTcwNTk2NjEzNA@@._V1._SX40_CR0,0,40,54_.jpg",
        "rating": 5.8
    }];
}