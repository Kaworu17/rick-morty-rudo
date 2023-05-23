import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.less'],
})
export class CharactersListComponent implements OnInit {
  constructor(
    private charactersService: CharactersService,
    public translate: TranslateService
  ) {
    this.currentLanguage = translate.currentLang;
  }

  characters: Character[] = [];
  initialChar: number = 0;
  finalChar: number = 15;
  currentApiPage: number = 1;
  totalPages: number = 0;
  id: number = 1;
  searchTerm: string = '';
  currentLanguage: string;

  selectedCharacter: Character | null = null;

  ngOnInit(): void {
    this.searchCharacters();
  }

  searchCharacters(): void {
    this.currentApiPage = 1;
    this.charactersService
      .getCharacters(this.currentApiPage, this.searchTerm)
      .subscribe((res) => {
        // Procesar los resultados de búsqueda (res) y actualizar la lista de personajes
        this.characters = res.results;
        this.totalPages = res.info.pages;
      });
  }

  nextPage() {
    this.currentApiPage++;

    this.charactersService
      .getCharacters(this.currentApiPage, this.searchTerm)
      .subscribe((res) => {
        this.characters = res.results;
      });
  }

  previousPage() {
    this.currentApiPage--;

    this.charactersService
      .getCharacters(this.currentApiPage, this.searchTerm)
      .subscribe((res) => {
        this.characters = res.results;
      });
  }

  showInfo(character: Character) {
    console.log(character);
    this.selectedCharacter = character;
  }

  hideInfo() {
    this.selectedCharacter = null;
  }

  reload() {
    this.searchTerm = '';
    this.searchCharacters();
  }

  changeLanguage(lang: string) {
    console.log('languaje', lang);
    this.translate.use(lang);
    this.currentLanguage = lang;
  }
}
