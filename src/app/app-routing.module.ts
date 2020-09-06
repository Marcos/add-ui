import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharacterViewComponent } from './character-view/character-view.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: ':nickname', component: CharacterViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
