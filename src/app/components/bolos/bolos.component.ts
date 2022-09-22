import { BoloInterface } from './../../models/bolos.model';
import { Router } from '@angular/router';
import { BoloServiceService } from './../../service/bolo-service.service';
import { Component, OnInit,Input } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.component.html',
  styleUrls: ['./bolos.component.scss']
})
export class BolosComponent implements OnInit {
  tituloHeader="Cadastre bolos e visualize todos os sabores oferecidos";
  bolos:BoloInterface[]=[];
  id:number=0;
  public formBolos!:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private boloService:BoloServiceService,
  ) {
  }

  ngOnInit(): void {
    this.formBolos=this.formBuilder.group({
      inputBolo: new FormControl('',[Validators.required]),
      inputValor: new FormControl('',[Validators.required])
    })

    this.boloService.lerBolos().subscribe({
      next:(bolos:BoloInterface[])=>{
        console.log(bolos)
        this.bolos=bolos
      },
      error:()=>{
        console.log('Erro ao importar os bolos')
      }
    })
  }

  salvarBolo(){
    //console.log("salvar")
    let id=this.bolos.length+1;
    let _valor=Number(this.formBolos.controls['inputValor'].value)
    let bolo:BoloInterface={
      id:id,
      nome:this.formBolos.controls['inputBolo'].value,
      valor:_valor
    }

    this.boloService.salvarBolo(bolo).subscribe({
      next:()=>{
         //alert("bolo salvo com sucesso")
         this.ngOnInit()
      },
      error:()=>{
         alert("Erro ao salvar Bolo")
      }
    })
  }

  excluirBolo(id:number){

    this.boloService.excluirBolo(id).subscribe({
      next:()=>{
        console.log("excluiu");
        this.ngOnInit();
      },
      error:()=>{
        console.log("erro ao excluir bolo");

      }
    })
  }

  editarBolo(id:number){

    this.boloService.lerBolosById(id).subscribe({
      next:(bolo:BoloInterface)=>{
        this.formBolos.controls['inputValor'].setValue(bolo.valor);
        this.formBolos.controls['inputBolo'].setValue(bolo.nome);
        this.id=bolo.id;
        console.log("editar "+this.id)
      },
      error:()=>{
        console.log("erro ao editar bolo");
      }
    })
  }

  atualizarEdicao(){
    console.log("editar "+this.id)
    let id=this.id;
    let _valor=Number(this.formBolos.controls['inputValor'].value)
    let bolo:BoloInterface={
      id:id,
      nome:this.formBolos.controls['inputBolo'].value,
      valor:_valor
    }

    this.boloService.updateBolo(bolo).subscribe({
      next:()=>{
         //alert("bolo salvo com sucesso")
         this.ngOnInit()
      },
      error:()=>{
         alert("Erro ao salvar Bolo")
      }
    })
  }

}


