import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
data = [];
  constructor(private globalvar: GlobalvarService) { 
    this.data = globalvar.getNote();
  }
  FAV(index) {
    console.log(index);
    this.globalvar.setFav(index);
  }
  ngOnInit() {
  }

}