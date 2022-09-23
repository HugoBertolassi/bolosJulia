import { BoloInterface } from './../../models/bolos.model';
import { Router } from '@angular/router';
import { BoloServiceService } from './../../service/bolo-service.service';
import { Component, OnInit,Input, Inject } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { DialogBoloEditarComponent } from 'src/app/view/dialog-bolo-editar/dialog-bolo-editar.component';


//dialog
export interface DialogData {
  id:number,
  bolo:string,
  valor:number
}



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
    public dialog: MatDialog
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
        //console.log("editar "+this.id)
      },
      error:()=>{
        console.log("erro ao editar bolo");
      }
    })
  }

  atualizarEdicao(){
    //console.log("editar "+this.id)
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

  //////////////////////////// dialog

  openDialog(id:number,enterAnimationDuration: string, exitAnimationDuration: string): void {


    this.boloService.lerBolosById(id).subscribe({ //pegar bolo
      next:(bolo:BoloInterface)=>{

        //abir o dialog
        const dialogRef = this.dialog.open(DialogBoloEditarComponent, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
          data:{id:bolo.id,nome:bolo.nome,valor:bolo.valor}
          //data: {name: this.name, animal: this.animal},
        });

        //receber fechamento do dialog
        dialogRef.afterClosed().subscribe(bolo => {
          this.boloService.updateBolo(bolo).subscribe({
            next:()=>{
               //alert("bolo salvo com sucesso")
               this.ngOnInit()
            },
            error:()=>{
               alert("Erro ao salvar Bolo")
            }
          })
        });

      },
      error:()=>{
        console.log("erro ao editar bolo");
      }
    })

  }

}


