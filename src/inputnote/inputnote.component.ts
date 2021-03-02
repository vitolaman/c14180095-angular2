import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inputnote',
  templateUrl: './inputnote.component.html',
  styleUrls: ['./inputnote.component.css']
})
export class InputnoteComponent implements OnInit {
  tes;
  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    
  }

}