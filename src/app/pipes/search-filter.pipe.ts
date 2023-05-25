import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/api-response.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(characters: Character[], searchTerm: string): any {
    /*   console.log('perro', searchTerm, characters);
    console.log(
      'perro2',
      characters.filter((s) => s.name == searchTerm)
    );
    console.log(
      'perro3',
      characters.find((s) => s.name == searchTerm)
    );
    console.log('perro4', characters.entries.name.includes(searchTerm)); */

    return characters.filter((s) => s.name.toLowerCase().includes(searchTerm));
  }
}
