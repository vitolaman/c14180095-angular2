import { Component, VERSION } from '@angular/core';
import { GlobalvarService } from './globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  judul = "";
  tanggal = "";
  isi = "";

constructor(private globalvar: GlobalvarService) {

}

    SUBMITNOTE() {
      this.globalvar.setNote(this.judul, this.tanggal, this.isi)
  }
}