import { Injectable } from '@angular/core';
import { Headers,Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import { User } from '../model/user';
import { BaseService } from './base.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { baseUrl } from '../model/const';
import {Subject} from"rxjs/Subject";
@Injectable()
export class ArticleService extends BaseService{

  private queryUrl = baseUrl+'/article/query';
  private hotUrl = baseUrl+'/article/hot';

  constructor(private http: Http){
    super();
  }

  /*查询文章*/
  query(pageNumber:number,pageSize:number,keyword:string,tagId:string){
    let url = this.queryUrl+`?pageNumber=${pageNumber}&pageSize=${pageSize}&keyword=${keyword}&tagId=${tagId}&status=1`;
    return this.http.get(url,this.options).toPromise().then(this.extractData).catch(this.handleError);
  }

  /*查询热门文章*/
  hot(pageNumber:number,pageSize:number){
    let url = this.hotUrl+`?pageNumber=${pageNumber}&pageSize=${pageSize}`;
   return this.http.get(url,this.options).toPromise().then(this.extractData).catch();
  }


  private extractData(res: Response) {
     return res.json();
  }

}
