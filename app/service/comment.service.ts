import { Injectable } from '@angular/core';
import { Headers,Http,Response,URLSearchParams} from '@angular/http';
import { BaseService } from './base.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/toPromise';

import { baseUrl } from '../model/const';

@Injectable()
export class CommentService extends BaseService{

 private commentUrl = baseUrl+'/etcom/query';

 private url = baseUrl+'/tag/hotTag';

 private saveUrl=baseUrl+'/etcom/save';

 private loveUrl=baseUrl+'/etcom/love';

 private replyUrl=baseUrl+'/etcom/reply';

 private deleteUrl = baseUrl+'/etcom/delete';



 constructor(private http: Http) {
   super();
 }

getComment(page:number,size:number,objId:string,type:number){
   const url = `${this.commentUrl}?objectId=${objId}&pageNumber=${page}&pageSize=${size}&type=${type}`;
   return this.http.get(url,this.options).toPromise()
     .then(this.extractData)
     .catch(this.handleError);
 }

 private extractData(res: Response) {
	  return res.json();
 }

saveComment(newsId:string,comment:string,type:string){
    if(comment==''||comment==null){
      return;
    }
    let status=Cookie.get('status');
    if(status=='true'){
      let userId = Cookie.get('id');
      console.log('userId='+userId);
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('objectId', newsId);
      urlSearchParams.append('userId', userId);
      urlSearchParams.append('context', comment);
      urlSearchParams.append('type',type);
      return this.http.post(this.saveUrl,urlSearchParams,this.postOptions).toPromise()
      .then(this.extractData).catch(this.handleError);
    }else{
      return;
    }
 }

 /*回复*/
 reply(objId:string,context:string,type:number,objUserId:string){

   let userId = Cookie.get('id');

   let urlSearchParams = new URLSearchParams();
   urlSearchParams.append('objId', objId);
   urlSearchParams.append('userId', userId);
   urlSearchParams.append('objUserId',objUserId);
   urlSearchParams.append('context', context);

   return this.http.post(this.replyUrl,urlSearchParams,this.postOptions).toPromise()
   .then(this.extractData).catch(this.handleError);
 }


 /*喜欢*/
 love(objId:string){
   let userId = Cookie.get('id');
   let urlSearchParams = new URLSearchParams();
   urlSearchParams.append('id', objId);
   urlSearchParams.append('userId', userId);
   console.log("id="+objId+",userId="+userId);

   return this.http.post(this.loveUrl,urlSearchParams,this.postOptions).toPromise()
   .then(this.extractData).catch(this.handleError);
 }


 /*删除评论*/
 deleteComment(id:string,objectId:string,type:number){

   let userId = Cookie.get('id');
   let urlSearchParams = new URLSearchParams();
   urlSearchParams.append('id', id);
   urlSearchParams.append('userId', userId);
   urlSearchParams.append('objectId', objectId);
   urlSearchParams.append('type',type);

   return this.http.post(this.deleteUrl,urlSearchParams,this.postOptions).toPromise()
   .then(this.extractData).catch(this.handleError);

 }


}
