import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { baseUrl } from '../model/const';

@Injectable()
export class NewsService {

 private headers = new Headers({'Content-Type': 'application/json'});
 private newsUrl = baseUrl+'/news/query';

 constructor(private http: Http) { }

 getNews(type:number,pageNumber:number,pageSize:number,keyword:string,tagId:string):Promise<any>{

   const url = `${this.newsUrl}?type=${type}&pageNumber=${pageNumber}&pageSize=${pageSize}&status=1&keyword=${keyword}&tagId=${tagId}`;
	 return this.http.get(url,{headers: this.headers}).toPromise()
     .then(this.extractNewsData)
     .catch(this.handleError);
 }

 private extractNewsData(res: Response) {
	  return res.json();
 }

 private handleError(error: any): Promise<any> {
	  return Promise.reject(error.message || error);
 }

}
