import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi='http://localhost:3000';
  constructor(private httpClient: HttpClient){
      console.log("Conexion realizada");
  }
  private buscarTrabajadorNombre(Nombre){
      const url = `${this.urlApi}/buscarTrabajadorNombre`
    return this.httpClient.get(url);
  }
}
