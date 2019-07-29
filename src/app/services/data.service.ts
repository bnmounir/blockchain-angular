import { Injectable } from '@angular/core';
import { Data } from '../../assets/blockchain.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public dataInstance = new Data();
  constructor() {
    this.dataInstance = this.dataInstance;
  }
}
