import { Component, OnInit } from '@angular/core';
import { Character, Attribute } from '../api';

import { RaceService } from '../race.service';
import { MainClassService } from '../mainclass.service';
import { SubClassService } from '../subclass.service';
import { SpellService } from '../spell.service';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(
    private raceService: RaceService,
    private mainClassService: MainClassService,
    private subClassService: SubClassService,
    private spellService: SpellService,
    private equipmentService: EquipmentService
  ) { }

  races: Attribute[]
  mainClasses: Attribute[]
  subClasses: Attribute[]
  spells: Attribute[]
  equipments: Attribute[]

  character: Character = {
    id: '',
    nickname: '',
    name: '',
    race: null,
    mainClass: null,
    subClass: null,
    spells: null,
    equipments: null,
  };

  ngOnInit(): void {
    this.raceService.getRaces()
      .subscribe(resultList => this.races = resultList.results);
    this.mainClassService.getMainClasses()
      .subscribe(resultList => this.mainClasses = resultList.results);
    this.equipmentService.getEquipments()
      .subscribe(resultList => this.equipments = resultList.results);
  }

  onMainClassChange(): void {
    this.subClassService.getSubClassesByMainClass(this.character.mainClass)
      .subscribe(resultList => this.subClasses = resultList.results);
  }

  onSubClassChange(): void {
    this.spellService.getSpeels(this.character.mainClass, this.character.subClass)
      .subscribe(resultList => this.spells = resultList.results);
  }

}
