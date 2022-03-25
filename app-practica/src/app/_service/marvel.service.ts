import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url: string = `https://bp-marvel-api.herokuapp.com/marvel-characters`;
  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<any[]>(`${this.url}/?idAuthor=49`);
  }

  listarPorPersonaje(id: number, titulo: string) {
    return this.http.get<any>(`${this.url}?idAuthor=${id}&title=${titulo}`);
  }

  registrar(marvel: any) {
    return this.http.post(`${this.url}?idAuthor=49`, marvel);
  }

  modificar(marvel: any) {
    return this.http.put(`${this.url}?idAuthor=49`, marvel);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.url}/${id}?idAuthor=49`);
  }
}
