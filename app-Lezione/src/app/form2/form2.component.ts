import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  signupForm: FormGroup;
  nomiProibiti: string[] = ['Test', 'Pippo', 'Alpha'];

  ngOnInit(): void {
    //vado a strutturare l'intero form
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.vietaNomi.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required]),
      }),
      'comments': new FormGroup({
        'commento': new FormControl(null, [Validators.required, Validators.maxLength(200)])
      })
    });

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    this.signupForm.setValue({
      'userData': {
        'username': "Carlo",
        'email': 'carlo@mail.com'
      },
      'comments':{
        'commento': 'prova commento'
      }
    })

  }

  onSubmit(){
    if(this.signupForm.invalid){
      alert("Il tuo form non è valido")
      return;
    }else

      alert("Sto inviando il form al backend");
      console.log(this.signupForm);

    this.signupForm.reset();
  }

  vietaNomi(control: FormControl): {[s: string]: boolean}{
    if(this.nomiProibiti.indexOf(control.value) != -1){
        return {'usernameVietato': true}
    }
    return null;
  }


}
