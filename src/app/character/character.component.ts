import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Attribute } from '../api';

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

  characterForm = new FormGroup({
    nickname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    race: new FormControl(null, Validators.required),
    mainClass: new FormControl(null, Validators.required),
    subClass: new FormControl({ value: null, disabled: true }, Validators.required),
    spells: new FormControl({ value: null, disabled: true }),
    equipments: new FormControl(null),
  });

  constructor(
    private raceService: RaceService,
    private mainClassService: MainClassService,
    private subClassService: SubClassService,
    private spellService: SpellService,
    private equipmentService: EquipmentService
  ) { }

  raceList: Attribute[]
  mainClassList: Attribute[]
  subClassList: Attribute[]
  spellList: Attribute[]
  equipmentList: Attribute[]

  ngOnInit(): void {
    this.raceService.getRaces()
      .subscribe(resultList => this.raceList = resultList.results);
    this.mainClassService.getMainClasses()
      .subscribe(resultList => this.mainClassList = resultList.results);
    this.equipmentService.getEquipments()
      .subscribe(resultList => this.equipmentList = resultList.results);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.characterForm.value);
  }

  onMainClassChange(): void {
    this.subClassService.getSubClassesByMainClass(this.characterForm.get('mainClass').value)
      .subscribe(resultList => this.subClassList = resultList.results);
    this.characterForm.controls['subClass'].enable();
  }

  onSubClassChange(): void {
    this.spellService.getSpeels(this.characterForm.get('mainClass').value, this.characterForm.get('subClass').value)
      .subscribe(resultList => this.spellList = resultList.results);
    this.characterForm.controls['spells'].enable();
  }

  allowedChars = new Set('0123456789'.split('').map(c => c.charCodeAt(0)));

  checkIsNumber(event: KeyboardEvent) {
    if (event.keyCode > 31 && !this.allowedChars.has(event.keyCode)) {
      event.preventDefault();
    }
  }

}
