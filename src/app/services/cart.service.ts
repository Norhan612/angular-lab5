import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Array<Cart>>([]);
  private counter = new BehaviorSubject<Number>(0);

  constructor() { }

  getItems(){
    return this.cart.asObservable();
  }

  setItem(cart: Array<Cart>){
    
    this.cart.next(cart);
  }

  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(num:Number){
    this.counter.next(num);
  }

  
}
