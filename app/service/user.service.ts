import { Injectable } from '@angular/core';
import { Headers,Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import { User } from '../model/user';
import { BaseService } from './base.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/operator/toPromise';

import {Subject} from"rxjs/Subject";
import { baseUrl } from '../model/const';

@Injectable()
export class UserService extends BaseService{

 private userSubject = new Subject();
 user$ = this.userSubject.asObservable();

 private url = baseUrl+'/user/me';

 private loginUrl=baseUrl+'/user/login';

 constructor(private http: Http) {
   super();
 }

 /*向多个组件推送user*/
 updateUser(user:User){
  this.userSubject.next(user);
 }

 getUser():Promise<User>{

   let token = Cookie.get('token');
   let url = '';
   if(token!=null&&token!=''){
     url=this.url+'?token='+token;
   }

	 return this.http.get(url,this.options).toPromise()
     .then(this.extractData)
     .catch(this.handleError);
 }

 getLoginStatus():User{
   return null;
 }

 login(mail:string,pass:string):Promise<User>{
   let urlSearchParams = new URLSearchParams();
   urlSearchParams.append('email', mail);
   urlSearchParams.append('password', pass);
   let param = urlSearchParams.toString();

	 return this.http.post(this.loginUrl,param,this.postOptions).toPromise()
     .then(this.extractData)
     .catch(this.handleError);
 }

 private extractData(res: Response) {
	  let body = res.json().data;
    let user=new User();
    if(res.json().code=='000000'||res.json().code=='000004'){
      user.name = body.name;
      user.token = body.token;
      user.headImage = body.headImage;
      user.email = body.email;
    }
    Cookie.delete('token');
    Cookie.delete('status');
    Cookie.delete('id');
    Cookie.set('token',user.token,1);

    Cookie.set('id',body.userId,1);

  	if(res.json().code=='000000'){
  		user.isLogin=true;
      Cookie.set('status','true',1);
  	}else{
  		user.isLogin=false;
      Cookie.set('status','false',1);
  	}
	  return user;
	}



}
