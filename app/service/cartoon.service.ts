import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';
import { Cartoon } from '../model/cartoon';
import { baseUrl } from '../model/const';
import 'rxjs/add/operator/toPromise';

@Injectable()
 export class CartoonService {

 private headers = new Headers({'Content-Type': 'application/json'});

 private cartoonQueryUrl = baseUrl+'/cartoon/query';

 constructor(private http: Http) { }

 getCartoon(type:string,keyword:string,pageNumber:number,pageSize:number,isEnd:string,area:string){
	 const url = `${this.cartoonQueryUrl}?type=${type}&keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}&isEnd=${isEnd}&area=${area}`;

	 return this.http.get(url,{headers: this.headers})
	 .toPromise()
	 .then(this.extractData)
     .catch(this.handleError);
 }


 private extractData(res: Response) {
	  return res.json();
}

 private handleError(error: any): Promise<any> {
	  return Promise.reject(error.message || error);
 }

}
