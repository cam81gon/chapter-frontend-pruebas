import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from './../../_service/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  mensaje!:any
  authors!: any;
  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute,
     ) { }

  ngOnInit(): void {

  

    this.marvelService.listar().subscribe(data=> {
   
      this.authors = data;
    });
  }

  filtrar(valor: string): void{   
       this.marvelService.listarPorPersonaje(49,valor).subscribe(data=>{
          this.authors = data;
       })
  }

 eliminar(id:number){
  
  this.marvelService.eliminar(id).subscribe(data=>{
    this.marvelService.listar().subscribe(data=>{
      this.authors = data;
      
    })
   console.log(data)
   this.mensaje=data.toString() ;
   
  })
 }

}
