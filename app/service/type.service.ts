import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';
import { baseUrl } from '../model/const';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TypeService {

 private headers = new Headers({'Content-Type': 'application/json'});

 private url = baseUrl+'/cartoonType/queryAll';

 constructor(private http: Http) { }

 getType(){
	 return this.http.get(this.url,{headers: this.headers}).toPromise()
     .then(this.extractData)
     .catch(this.handleError);
 }

 private extractData(res: Response) {
	  return res.json().result;
 }

 private handleError(error: any): Promise<any> {
	  return Promise.reject(error.message || error);
 }

}
