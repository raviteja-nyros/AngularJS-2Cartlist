import { CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

export class ProductListGuard implements CanActivate {
  canActivate() {
    if (tokenNotExpired()) {
      return true;
    }
  }
}