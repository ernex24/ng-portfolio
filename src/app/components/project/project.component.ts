import { Component } from '@angular/core';
import {TextosWebService} from '../../services/textos-web.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {

    constructor( public _tws: TextosWebService ) {}

}
