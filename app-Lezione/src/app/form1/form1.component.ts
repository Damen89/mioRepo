import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  @ViewChild('mioForm') formRegistrazione: NgForm;

  submittedForm: boolean = false;

  utente = {
    nome: "Tizio",
    cognome: "Caio",
    indirizzo: "Via Da Inserire",
    citta: "Roma"
  }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    console.log(form);

    if(form.status == "VALID"){
      this.utente.nome = form.form.value.userData.nome;
      this.utente.cognome = this.formRegistrazione.form.value.userData.cognome;
      this.utente.indirizzo = form.form.value.userAddress.indirizzo;
      this.utente.citta = form.form.value.userAddress.citta;
      console.log(this.utente);
      this.submittedForm = true;
    }else{
      this.submittedForm = false
    }

  }



}
