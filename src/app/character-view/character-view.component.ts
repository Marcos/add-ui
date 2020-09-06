import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  nickname:string

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.nickname = params.get('nickname')
    });
  }

}
