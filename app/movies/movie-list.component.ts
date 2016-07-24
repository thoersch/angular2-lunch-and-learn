import { Component } from '@angular/core';

import { Movie } from './movie';
import { MovieFilterPipe } from './movie-filter.pipe';
import { StarComponent } from '../stars/star.component';
import { MovieService } from './movie.service';
import { MovieRating } from '../stars/movie-rating';

@Component({
    selector: 'app-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    pipes: [MovieFilterPipe],
    directives: [StarComponent],
    providers: [MovieService]
})
export class MovieListComponent {
    nameFilter: string;
    movies: Movie[];

    constructor(private movieService: MovieService) {
        this.movies = movieService.getMovies();
    }

    onRated(rating: MovieRating) : void {
        this.movieService.updateRating(rating.movieId, rating.rating);
    }
}