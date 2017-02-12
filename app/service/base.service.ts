import { Injectable } from '@angular/core';
import { Headers,RequestOptions} from '@angular/http';
import { origin } from '../model/const';

export class BaseService {

  public headers = new Headers();
  public postHeader = new Headers();

  postOptions = new RequestOptions({
    withCredentials : true,
    headers : this.postHeader
  });

  options = new RequestOptions({
    withCredentials : true,
    headers : this.headers
  });

  public constructor() {
   this.postHeader.append('Access-Control-Allow-Credentials','true');
   this.postHeader.append('Access-Control-Allow-Origin',origin);
   this.postHeader.append('Content-Type','application/x-www-form-urlencoded');

   this.headers.append('Access-Control-Allow-Credentials','true');
   this.headers.append('Content-Type','application/json');
   this.headers.append('Access-Control-Allow-Origin',origin);
 }

 public handleError(error: any): Promise<any> {
   return Promise.reject(error.message || error);
 }
}
