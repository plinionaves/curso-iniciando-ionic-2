import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'lowercase'
})
@Injectable()
export class Lowercase {
  transform(value: string, arg1: any) {
    value = value.toLowerCase();
    return (arg1) ? value.charAt(0).toUpperCase() + value.substr(1) : value;
  }
}
