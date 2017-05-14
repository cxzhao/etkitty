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
  templateUrl:'../html/comment_modal.html',
  providers: []
})
export class CommentModalComponent implements OnInit{

  cartoonId:string;

  private halfstar = ['很差5.5分','还行6.5分','一般7.5分','推荐8.5分','力荐9.5分'];

  private star = ['很差6分','还行7分','一般8分','推荐9分','力荐10分'];

  private score = [6,7,8,9,10];

  private halfscore = [5.5,6.5,7.5,8.5,9.5];

  private list = [0,0,0,0,0];

  private userScore:number;

	constructor(private userService:UserService){

  }

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

  private map:Map<string,number>;



  clickStart(index:number):void{
  		let key = "start-"+index;
  		let count = this.list[index-1];
  		if('undefined' == typeof(count)){
  			count=1;
  			this.list[index-1]=count;
  		}else{
  			count=count+1;
  			this.list[index-1]=count;
  		}

  		for(var i=1;i<index;i++){
  			$("#start-"+i).css("color","#FF6600");
  		}
  		if(index==1){
  			if(count==15){
  				count=1;
  				this.list[index-1]=count;
  			}
  			if(count>2){
  				let lowscore = 6-0.5*(count-2);
  				$("#span-score").html("很差"+lowscore+"分");
  				this.userScore = lowscore;
  				//颜色变化
  				if((count%2)==0){
  					$("#start-"+index).css("color","#FF6600");
  				}else{
  					$("#start-"+index).css("color","#FFCC00");
  				}
  			}else{
  				if((count%2)==0){
  					$("#start-"+index).css("color","#FF6600");
  					$("#span-score").html(this.star[index-1]);
  					this.userScore = this.score[index-1];
  				}else{
  					$("#start-"+index).css("color","#FFCC00");
  					$("#span-score").html(this.halfstar[index-1]);
  					this.userScore = this.halfscore[index-1];
  				}
  			}
  		}else{
  			if((count%2)==0){
  				$("#start-"+index).css("color","#FF6600");
  				$("#span-score").html(this.star[index-1]);
  				this.userScore = this.score[index-1];
  			}else{
  				$("#start-"+index).css("color","#FFCC00");
  				$("#span-score").html(this.halfstar[index-1]);
  				this.userScore = this.halfscore[index-1];
  			}
  		}

  		for(var i=index+1;i<=5;i++){
  			$("#start-"+i).css("color","#666666");
  		}

  	}

    overStart(index:number):void{
		   for(var i=1;i<index;i++){
			       $("#start-"+i).css("color","#FF6600");
		   }

		   $("#start-"+index).css("color","#FFCC00");

		  for(var i=index+1;i<=5;i++){
			   $("#start-"+i).css("color","#666666");
		   }
		  $("#span-score").html(this.halfstar[index-1]);
		  this.userScore = this.halfscore[index-1];
	 }

   /*评论*/
   submitComment():void{

   }

}
