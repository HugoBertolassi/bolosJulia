import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BoloInterface } from './../models/bolos.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoloServiceService {
  private listaBolos:any;
  private url='http://localhost:3000/bolos';


  constructor(
    private httpClient:HttpClient
  ) {
    this.listaBolos=[];//inicia a lista vazia
   }

  get bolos(){
    return this.listaBolos
  }
  set bolos(bolo:BoloInterface){
    this.listaBolos.push(bolo)
  }


  lerBolos():Observable<BoloInterface[]>{
    return this.httpClient.get<BoloInterface[]>(this.url)
  }
  lerBolosById(id:Number):Observable<BoloInterface>{
    return this.httpClient.get<BoloInterface>(`${this.url}/${id}`)
  }

  salvarBolo(bolo:BoloInterface):Observable<BoloInterface>{
    return this.httpClient.post<BoloInterface>(this.url,bolo)
  }

  excluirBolo(id:Number):Observable<BoloInterface>{
    return this.httpClient.delete<BoloInterface>(`${this.url}/${id}`)
  }

  updateBolo(bolo:BoloInterface):Observable<BoloInterface>{
    let endpoint=bolo.id;
    console.log(`${this.url}/${endpoint}`,bolo)
    return this.httpClient.put<BoloInterface>(`${this.url}/${endpoint}`,bolo)
  }
}
