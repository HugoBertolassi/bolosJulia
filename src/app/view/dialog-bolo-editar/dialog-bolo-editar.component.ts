import { BoloServiceService } from './../../service/bolo-service.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BoloInterface } from 'src/app/models/bolos.model';

@Component({
  selector: 'app-dialog-bolo-editar',
  templateUrl: './dialog-bolo-editar.component.html',
  styleUrls: ['./dialog-bolo-editar.component.scss']
})
export class DialogBoloEditarComponent implements OnInit {
  public form!:FormGroup

  constructor(
    public formbuilder:FormBuilder,
    public dialogRef: MatDialogRef<DialogBoloEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BoloInterface,
    public boloService:BoloServiceService
    ) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      id:['',[Validators.required]],
      bolo:['',[Validators.required]],
      valor:['',[Validators.required]]
    })
   // Number(this.formBolos.controls['inputValor'].value
    this.form.controls['id'].setValue(this.data.id);
    this.form.controls['bolo'].setValue(this.data.nome);
    this.form.controls['valor'].setValue(this.data.valor);
  }

  updateBolo(){
      let bolo:BoloInterface={
      id:this.form.controls['id'].value,
      nome:this.form.controls['bolo'].value,
      valor:Number(this.form.controls['valor'].value)
    }

    this.boloService.updateBolo(bolo).subscribe({
      next:()=>{
         alert("bolo salvo com sucesso")

      },
      error:()=>{
         alert("Erro ao salvar Bolo")
      }
    })




    this.dialogRef.close();
    this.form.reset()
  }
  onNoClick(): void {
    this.dialogRef.close();
    this.form.reset()
  }
}
