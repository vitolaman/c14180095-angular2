import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NoteComponent } from '../note/note.component';
import { RouterModule, Routes } from '@angular/router';
import { InputnoteComponent } from '../inputnote/inputnote.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { GlobalvarService } from './globalvar.service';

const ROUTES : Routes = [
  {path : 'note', component: NoteComponent},
  {path : 'input', component: InputnoteComponent},
  {path : 'favorite', component: FavoriteComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, NoteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
