import { Component,OnInit,Input,Injectable} from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

//import { NavComponent } from '../component/nav.component';

declare var jQuery:any;
declare var $:any;
@Injectable()
@Component({
  moduleId: module.id,
  selector: 'comment-modal-app',
  templateUrl:'../html/comment_modal.html'
})
export class CommentModalComponent implements OnInit{

  cartoonId:string;

	constructor(private userService:UserService){}

  @Input()
  commentText:string;

	ngOnInit():void{

	}

	open():void{

    jQuery("#commentModal").modal({
       keyboard: false,
       show:true,
       backdrop:'static'
    });
	}

	close():void{
    jQuery("#commentModal").modal('hide');
	}


}
