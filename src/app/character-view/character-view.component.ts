import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../api';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  nickname: string
  character: Character

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nickname = params.get('nickname')
      this.loadCharacter(params.get('nickname'))
    });
  }

  loadCharacter(nickname:string): void{
    this.characterService.getByNickname(nickname)
      .subscribe(character => this.character = character);
  }

}
