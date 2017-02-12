import { Component,OnInit,Input,Injectable} from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

//import { NavComponent } from '../component/nav.component';

declare var jQuery:any;
declare var $:any;

@Injectable()
@Component({
  moduleId: module.id,
  selector: 'login-modal-app',
  templateUrl:'../html/login_modal.html'
})
export class LoginModalComponent implements OnInit{

  user:User;

	constructor(private userService:UserService){}

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
        this.close();
      }
    });
  }

}
