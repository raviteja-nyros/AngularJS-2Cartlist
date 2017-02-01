import {Component} from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
    templateUrl:'./app/home/profile.component.html'
})

export class ProfileComponent{
   profile:any;
   constructor(){
       //this.profile = JSON.parse(localStorage.getItem('profile'));

   }
}