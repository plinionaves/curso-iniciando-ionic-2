import {Injectable, Pipe} from '@angular/core';

/*
  Generated class for the Lowercase pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'lowercase'
})
@Injectable()
export class Lowercase {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string, args: any[]) {
    return value.toLowerCase();
  }
}
