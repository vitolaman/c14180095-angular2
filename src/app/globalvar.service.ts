import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private array = [];
  counter = 0;
  constructor() { }

  public getNote() {
    return this.array;
  }

  public getFav() {
    for(var index in this.array){
      if(this.array[index].fav == true){
        return this.array[index]
      }
    }
  }
  public setFav(index){
    for(var i in this.array){
      this.array[i].fav = false;
    }
    this.array[index].fav = true;
  }
  public setNote(judul, tanggal, isi){
    var item = {
      judul : judul,
      tanggal : tanggal,
      isi : isi,
      index : this.counter,
      fav : false
    }
    this.array.push(item);
    this.counter++;
    console.log(this.array);
  }
}