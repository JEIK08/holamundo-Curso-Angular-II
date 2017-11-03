import { Component } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.css']
})
export class BodyComponent {
	tarjeta:boolean = false;
	info:any = {
		header: "Información",
		title: "Para tener en cuenta",
		msg: "La paja produce ceguera"
	}
	champs:string[] = ["Ashe", "Garen", "Ryze"];
}