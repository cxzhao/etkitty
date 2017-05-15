import { Component,OnInit,OnChanges,Input} from '@angular/core';
import { LoginModalComponent } from '../component/loginmodal.component';
import { CartoonService }  from '../service/cartoon.service';
import { CommentService }  from '../service/comment.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Page } from '../model/page';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'cartoon-detail-app',
  templateUrl:`../html/cartoondetail.html`
})
export class CartoonDetailComponent implements OnInit{

  id:string;
  @Input()
  cartoon:any;
  role:string;
  akira:string;
  director:string;
  isShowDirector:boolean;
  isShowAuthor:boolean;
  isEnd:string;
  score:number;
  type:string;
  pageNumber:number;
  pageSize:number;
  isLast:boolean;
  list:any;

  constructor(private loginModal:LoginModalComponent,private cartoonService:CartoonService,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit():void{
    let id = this.route.snapshot.params['id'];
    this.id=id;
    this.queryCartoonDetail(id);
    this.queryUserComment(1,20);
    this.queryType();
  }

  queryType(){
    this.cartoonService.queryCartoonType(this.id).then(res=>{
      if(res.code=='000000'){
        let result = res.result.data;
				this.type='';
				for(var i=0;i<result.length;i++){
					if(i==0){
						this.type+=result[i].typeName;
					}else{
						this.type+="，"+result[i].typeName;
					}
				}
      }
    }).catch();
  }

  queryCartoonDetail(id:string){
    this.cartoonService.queryCartoonDetail(id).then(res=>{
      if(res.code=='000000'){
        this.cartoon = res.data;
        this.score=res.data.score;
        console.log(this.cartoon.name);
        if(this.cartoon.isEnd!=null){
            if(this.cartoon.isEnd==0){
              this.isEnd="连载中";
            }else{
              this.isEnd="完结";
            }
        }else{
            this.isEnd="连载中";
        }
        this.role='';
        this.akira='';
        this.director='';
          for(let i=0;i<res.data.roleList.length;i++){
            if(i==0){
              this.role+=res.data.roleList[i].roleName;
            }else{
              this.role+="，"+res.data.roleList[i].roleName;
            }
          }

          for(let i=0;i<res.data.akiraList.length;i++){
            if(i==0){
              this.akira+=res.data.akiraList[i].akiraName;
            }else{
              this.akira+="，"+res.data.akiraList[i].akiraName;
            }
          }

          for(let i=0;i<res.data.directorList.length;i++){
            if(i==0){
              this.director+=res.data.directorList[i].directorName;
            }else{
              this.director+="，"+res.data.directorList[i].directorName;
            }
          }
          if(this.director=='' || this.director=='null'){
            this.isShowDirector=false;
          }else{
            this.isShowDirector=true;
          }
          if(res.data.author=='' || res.data.author=='null'){
            this.isShowAuthor=true;
          }else{
            this.isShowAuthor=true;
          }
      }

    }).catch();
  }



  queryUserComment(page:number,size:number):void{
    this.cartoonService.queryUserComment(page,size,this.id).then(res=>{
      if(res.code=='000000'){
          this.pageNumber = res.data.pageNumber;
					this.pageSize = res.data.pageSize;
					this.isLast = res.data.last;
					this.list = res.data.list;
      }
    }).catch();
  }

  private halfstar = ['很差5.5分','还行6.5分','一般7.5分','推荐8.5分','力荐9.5分'];

  private star = ['很差6分','还行7分','一般8分','推荐9分','力荐10分'];

  private commentScore = [6,7,8,9,10];

  private halfscore = [5.5,6.5,7.5,8.5,9.5];

  private slist = [0,0,0,0,0];

  private userScore:number;

  clickStart(index:number):void{
  		let key = "start-"+index;
  		let count = this.slist[index-1];
  		if('undefined' == typeof(count)){
  			count=1;
  			this.slist[index-1]=count;
  		}else{
  			count=count+1;
  			this.slist[index-1]=count;
  		}

  		for(var i=1;i<index;i++){
  			$("#start-"+i).css("color","#FF6600");
  		}
  		if(index==1){
  			if(count==15){
  				count=1;
  				this.slist[index-1]=count;
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
  					this.userScore = this.commentScore[index-1];
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
  				this.userScore = this.commentScore[index-1];
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

}
