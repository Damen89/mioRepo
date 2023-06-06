import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  autorizzato: boolean = true;

  constructor() { }

  checkAuth(){
    if(this.autorizzato){
      return true
    }else{
      return false;
    }
  }
}
