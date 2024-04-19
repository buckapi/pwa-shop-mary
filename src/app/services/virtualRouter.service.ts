import { Injectable } from '@angular/core';
import { AuthRESTService } from './auth-rest.service';
@Injectable({
  providedIn: 'root'
})
export class virtualRouter {
  constructor(
    public authRESTService:AuthRESTService
  ){

  }
   routerActive:string= "home";
 /*   setRoute(route: string) {
    const userType = this.authRESTService.getType();
  
    switch (route) {
      case 'home':
        switch (userType) {
          case 'admin':
            this.routerActive = 'admin-home';
            break;
          case 'employe':
            this.routerActive = 'user-home';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        break;
      case 'payments':
        switch (userType) {
          case 'admin':
            this.routerActive = 'admin-payments';
            break;
          case 'employe':
            this.routerActive = 'user-payments';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        break;
      case 'settings':
        this.routerActive = 'settings';
          break;
      case 'requests':
        switch (userType) {
          case 'admin':
            this.routerActive = 'admin-requests';
            break;
          case 'employe':
            this.routerActive = 'user-requests';
            break;
          default:
            console.error('Tipo de usuario no reconocido');
        }
        break;
      default:
        console.error('Ruta no reconocida');
    }
  } */
  
  setRoute(route: string) {
    switch (route) {
      case 'home':
        this.routerActive = 'home';
        break;
      case 'about':
        this.routerActive = 'about';
        break;
      case 'contact':
        this.routerActive = 'contact';
        break;
      case 'cart':
        this.routerActive = 'cart';
        break;
        case 'checkout':
        this.routerActive = 'checkout';
        break;
        case 'faqs':
        this.routerActive = 'faqs';
        break;
        case 'shop':
        this.routerActive = 'shop';
        break;
      default:
        console.error('Ruta no reconocida');
    }
  }
  
}
