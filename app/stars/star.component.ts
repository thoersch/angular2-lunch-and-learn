import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MovieRating } from './movie-rating';

@Component({
    selector: 'app-stars',
    templateUrl: 'app/stars/star.component.html',
    styleUrls: ['app/stars/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input()
    movieId: number;
    @Input()
    rating: number;
    starWidth: number;
    @Output()
    notify: EventEmitter<MovieRating> = new EventEmitter<MovieRating>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 200 / 10;
    }

    onRate() : void {
        let rating: number = parseFloat(prompt('What\'s your rating?'));
        this.notify.emit({ movieId: this.movieId, rating: rating});
    }
}