import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../app/globalvar.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
arr = [];
  constructor(private globalvar: GlobalvarService) { 
    this.arr = globalvar.getFav();
  }

  ngOnInit() {
  }

}