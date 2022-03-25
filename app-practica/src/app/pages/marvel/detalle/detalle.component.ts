import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Marvel } from 'src/app/_model/marvel';
import { MarvelService } from 'src/app/_service/marvel.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  mensaje!:any
  marvel!: Marvel;
  imagenVista!: string 
  form!: FormGroup;
  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      descripcion: new FormControl(""),
      idAuthor:new FormControl(""),
      imagen: new FormControl("")
    });
     
   
  }
  mostrarImagen(event:any){
    let imagen = this.form.value["imagen"];
    this.form.patchValue({"imagenVista": imagen });
  }
  aceptar(){
    if (this.form.invalid){return;}
    this.marvel = new Marvel();
    const valores: any = Object.assign({}, this.form.getRawValue()) ;
    console.log(valores)
    this.marvel.title=valores.nombre;
    this.marvel.body = valores.descripcion;
    this.marvel.image = valores.imagen;
    this.marvel.category = "marvel",
    this.marvel.idAuthor = "49",
    
    this.marvelService.registrar(this.marvel).subscribe(data=>{
      this.mensaje = data
    });
  }

}
