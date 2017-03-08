import { Injectable } from '@angular/core';
import { Headers,Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import { BaseService } from './base.service';

import 'rxjs/add/operator/toPromise';

import { Tag } from '../model/tag';

import { baseUrl } from '../model/const';

@Injectable()
export class TagService extends BaseService{

 private url = baseUrl+'/tag/hotTag';

 constructor(private http: Http) {
   super();
 }

 getHotTag(type:number,pageNumber:number,pageSize:number){
   const tagUrl = `${this.url}?type=${type}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
	 return this.http.get(this.url,this.options).toPromise()
     .then(this.extractData)
     .catch(this.handleError);
 }

 private extractData(res: Response) {
	  return res.json();
 }

}
