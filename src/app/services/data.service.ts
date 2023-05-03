import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  data='http://damp-spire-59848.herokuapp.com/api/'
  getData(){
    return this.http.get<Product[]>(`${this.data}products`)
  }
  getDataCategory(){
    return this.http.get<Product[]>(`${this.data}categories/2/products`)
  }
}
