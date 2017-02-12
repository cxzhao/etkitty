import { Component,OnInit,Injectable} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Injectable()
@Component({
  selector: 'nav-app',
  template:`<nav class="navbar-inverse navbar-default"
	style="background-color: #006666" role="navigation">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target="#example-navbar-collapse">
				<span class="sr-only">切换导航</span> <span class="icon-bar"></span> <span
					class="icon-bar"></span> <span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" routerLink="/rank">外星猫</a>
		</div>

		<div class="collapse navbar-collapse" id="example-navbar-collapse">
			<ul class="nav navbar-nav">
				<li><a routerLink="/rank">推荐榜</a></li>
				<li><a routerLink="/article">外星热评</a></li>
				<li><a routerLink="/info">最新情报</a></li>
				<li><a routerLink="/news">动漫资讯</a></li>
				<!-- 						<li><a href="#/recommend">网友推荐</a></li> -->
			</ul>

			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown"><a href="javascript:vaid(0)"
					class="dropdown-toggle" data-toggle="dropdown">{{user?.name}}<span
						class="caret" id="userName"></span></a>
					<ul class="dropdown-menu" role="menu">
						<li><a href="javascript:void(0)" ng-click="gologinhtml()"
							target="_blank"> {{user?.isLogin == true ? '已登录' : '登陆'}}</a></li>
						<li class="divider"></li>
						<li><a href="javascript:vaid(0)" ng-click="loginOut()">退出</a></li>
						<li class="divider"></li>
						<li><a href="javascript:void(0)" ng-click="gotoregister()">{{user?.isLogin
								== true ? '已注册' : '注册'}}</a></li>
						<li class="divider"></li>
						<li><a href="#/mycomment">我的外星猫</a></li>
					</ul></li>
			</ul>
			<form class="navbar-form navbar-right" role="search">
				<div class="input-group">
					<input type="text" class="form-control" placeholder="海贼王">
					<span class="input-group-btn">
						<button class="btn btn-danger" type="button">搜索</button>
					</span>
				</div>
			</form>
		</div>
	</div>

</nav> `
})

export class NavComponent implements OnInit{

	ngOnInit() : void{
	   this.getUser();
	}

	constructor(private userService:UserService){}

	user:User;

  getUser():void{
    this.userService.getUser().then(users=>this.user=users);
  }


}
