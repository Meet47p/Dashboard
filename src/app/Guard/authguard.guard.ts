import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(sessionStorage.getItem('username')!=null){
    return true;
  }
  else{
    router.navigateByUrl('/login');
    return false;
  }
};
