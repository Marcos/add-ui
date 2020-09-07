import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Attribute } from '../api';

import { RaceService } from '../race.service';
import { MainClassService } from '../mainclass.service';
import { SubClassService } from '../subclass.service';
import { SpellService } from '../spell.service';
import { EquipmentService } from '../equipment.service';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characterForm = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.pattern('[0-9a-zA-Z\-_]*')]),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    race: new FormControl(null, Validators.required),
    mainClass: new FormControl(null, Validators.required),
    subClass: new FormControl({ value: null, disabled: true }, Validators.required),
    spells: new FormControl({ value: null, disabled: true }),
    equipments: new FormControl(null),
  });

  constructor(
    private characterService: CharacterService,
    private raceService: RaceService,
    private mainClassService: MainClassService,
    private subClassService: SubClassService,
    private spellService: SpellService,
    private equipmentService: EquipmentService,
    private router: Router
  ) { }

  raceList: Attribute[]
  mainClassList: Attribute[]
  subClassList: Attribute[]
  spellList: Attribute[]
  equipmentList: Attribute[]
  serverErrorMessage: string

  ngOnInit(): void {
    this.raceService.getRaces()
      .subscribe(resultList => this.raceList = resultList.results);
    this.mainClassService.getMainClasses()
      .subscribe(resultList => this.mainClassList = resultList.results);
    this.equipmentService.getEquipments()
      .subscribe(resultList => this.equipmentList = resultList.results);
  }

  onSubmit() {
    this.serverErrorMessage = null
    console.warn(this.characterForm.value);
    this.characterService.create(this.characterForm.value).subscribe({
      next: data => this.router.navigate(['', data.nickname]),
      error: error => this.serverErrorMessage = `Sorry, There was an error! ${error.message}`
    })
  }

  verifyNicknameisUnique() {
    const name = this.characterForm.get('nickname').value
    console.log("Verifying name exists")
    this.characterService.verifyNicknameExists(name)
      .subscribe(response => {
        if (response.exists) {
          this.characterForm.get('nickname')
            .setErrors({ 'existentNickname': true });
        }
      });
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

  checkIsNumber(event: KeyboardEvent) {
    if (event.keyCode < 0 || event.keyCode > 57) {
      event.preventDefault();
    }
  }

}
