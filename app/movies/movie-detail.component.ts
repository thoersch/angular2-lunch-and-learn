import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
    movie: Movie;

    constructor(private movieService: MovieService, private route: ActivatedRoute) {

    }

    ngOnInit() : void {
        this.route.params.subscribe(params => this.movie = this.movieService.getMovie(parseInt(params['id'])));
    }
}