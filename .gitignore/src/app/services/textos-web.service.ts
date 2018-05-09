import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TextosWebService {
info: any = {};
cargada:boolean = false;
  constructor( public http:Http) {
    this.http.get('../../assets/data/textosWeb.json')
        .subscribe( data => {
           console.log(data.json());
           this.cargada = true;
           this.info = data.json();
        });
    }
}
