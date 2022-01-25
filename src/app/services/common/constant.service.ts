import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  // baseAPIURL = "http://localhost:5000/api/";   // Localhost
  baseAPIURL = "https://smartinventoryep3.herokuapp.com/api/";  
  constructor() { }

}