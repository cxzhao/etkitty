import { Injectable } from '@angular/core';
import { Headers,Http,Response,URLSearchParams,RequestOptions} from '@angular/http';
import { User } from '../model/user';
import { BaseService } from './base.service';

import 'rxjs/add/operator/toPromise';

import { baseUrl } from '../model/const';

@Injectable()
export class UserService extends BaseService{

 private url = baseUrl+'/user/me';

 private loginUrl=baseUrl+'/user/login';

 constructor(private http: Http) {
   super();
 }

 getUser():Promise<User>{

	 return this.http.get(this.url,this.options).toPromise()
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

  	if(res.json().code=='000000'){
  		user.isLogin=true;
  	}else{
  		user.isLogin=false;
  	}

	  return user;
	}



}
