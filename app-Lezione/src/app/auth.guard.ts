import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthorizationService);
  const router = inject(Router);
  const routeActivated = inject(ActivatedRoute);

  console.log("mi trovo nella rotta: " + route);
  console.log(state);

  if(authService.checkAuth()){
    return true;
  }else{
    console.log("mi spiace non sei autorizzato");

    return router.navigate(['/']);
  }
};

export const authGuardChild: CanActivateChildFn = () =>{

  return true;
}
