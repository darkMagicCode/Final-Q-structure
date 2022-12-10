import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pdesc'
})
export class PdescPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').slice(0,7).join(' ');
  }


}
