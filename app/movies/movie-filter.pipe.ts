import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
    name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
    transform(value: Movie[], args: string): Movie[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return !filter ? value 
                       : value.filter((movie: Movie) => movie.title.toLocaleLowerCase().indexOf(filter) != -1);
    }
}