import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  schools = [
    "slytherin", "gryffindor", "ravenclaw", "hufflepuff"
  ]
  year = new Date().getFullYear()
  characters$: Observable<Character[]> = new Observable()
  selectedSchool = this.schools[0]
  constructor(private charactersService: CharactersService) {

  }

  ngOnInit(): void {
    this.loadCharacters()
  }

  loadCharacters(){
    this.characters$ = this.charactersService.getCharactersBySchool(this.selectedSchool)
  }

  onSelectSchool(school: string){
    if (this.selectedSchool != school){
      this.selectedSchool = school
      this.loadCharacters()
    }
  }
}
