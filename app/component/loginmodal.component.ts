import { Component,OnInit,Input,Output,Injectable} from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

//import { NavComponent } from '../component/nav.component';

declare var jQuery:any;
declare var $:any;
@Injectable()
@Component({
  moduleId: module.id,
  selector: 'login-modal-app',
  templateUrl:'../html/login_modal.html',
  providers: []
})
export class LoginModalComponent implements OnInit{

  @Input()
  user:User;

	constructor(public userService:UserService){}

  @Input()
  email:string;
  @Input()
  password:string;

	ngOnInit():void{

	}



	open():void{

    jQuery("#loginModal").modal({
       keyboard: false,
       show:true,
       backdrop:'static'
    });

    this.user = this.userService.getLoginStatus();

    if(this.user!=null&&this.user.isLogin==false){

    }
	}

	close():void{
    jQuery("#loginModal").modal('hide');
	}

  mlogin():void{

    this.userService.login(this.email,jQuery.md5(this.password)).then(res=>{
      let user = new User();
      if(res.isLogin==true){
        /*向其他组件推送用户信息*/
        this.userService.updateUser(res);
        this.userService.getUser();
        this.close();
      }
    });
  }

}
