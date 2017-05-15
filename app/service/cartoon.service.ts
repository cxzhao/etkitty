import { Injectable } from '@angular/core';
import { Headers,Http,Response,URLSearchParams } from '@angular/http';
import { Cartoon } from '../model/cartoon';
import { baseUrl } from '../model/const';
import { BaseService } from './base.service';
import 'rxjs/add/operator/toPromise';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
 export class CartoonService extends BaseService{

 private cartoonQueryUrl = baseUrl+'/cartoon/query';

 private cartoonLoveUrl = baseUrl+'/cartoon/love';

 private cartoonDetailUrl=baseUrl+'/cartoon/detail';

 private userCommentUrl=baseUrl+'/etcom/query';

 private cartoonTypeUrl=baseUrl+'/cartoonType/queryByCartoonId';

 constructor(private http: Http) {
   super();
  }

 getCartoon(type:string,keyword:string,pageNumber:number,pageSize:number,isEnd:number,area:string){
	 const url = `${this.cartoonQueryUrl}?type=${type}&keyword=${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}&isEnd=${isEnd}&area=${area}`;

	 return this.http.get(url,{headers: this.headers})
	 .toPromise()
	 .then(this.extractData)
     .catch(this.handleError);
 }


private extractData(res: Response) {
	  return res.json();
}


 love(cartoonId:string){
   let userId = Cookie.get('id');
   let urlSearchParams = new URLSearchParams();
   urlSearchParams.append('cartoonId', cartoonId);
   urlSearchParams.append('userId', userId);
   console.log("cartoonId="+cartoonId+",userId="+userId);

   return this.http.post(this.cartoonLoveUrl,urlSearchParams,this.postOptions).toPromise()
   .then(this.extractData).catch(this.handleError);
 }

 queryCartoonDetail(id:string){
   const url = `${this.cartoonDetailUrl}?cartoonId=${id}`;
	 return this.http.get(url,{headers: this.headers}).toPromise().then(this.extractData).catch(this.handleError);
 }

 queryUserComment(page:number,size:number,objId:string){
   const url = `${this.userCommentUrl}?objectId=${objId}&pageNumber=${page}&pageSize=${size}&type=0`;
   return this.http.get(url,{headers: this.headers}).toPromise().then(this.extractData).catch(this.handleError);
 }

queryCartoonType(id:string){
  const url = `${this.cartoonTypeUrl}?cartoonId=${id}`;
  return this.http.get(url,{headers: this.headers}).toPromise().then(this.extractData).catch(this.handleError);
	}

}
