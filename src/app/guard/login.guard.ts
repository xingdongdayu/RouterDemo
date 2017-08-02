import {CanActivate} from "@angular/router";
// 实现CanActivate接口，路由会根据这个方法返回的bool值确定是否允许进入该路由
export class LoginGuard implements CanActivate {
  canActivate() {
    // 这里仅对判断是否登陆做个模拟
    let loggedIn: boolean = Math.random() < 0.5;
    if(!loggedIn){
      console.log("User does not login");
    }
    return loggedIn;
  }
}
