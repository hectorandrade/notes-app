import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../notes/note';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: Note[], text: string): any[] {
    if (text === '') {
      return array;
    }

    return array.filter(item => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
  }
}
