import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
    // 获取当前路由中的参数，以此获取Product信息，然后这个Product信息会被携带在当前路由中，进入相应组件
    let productId: number = route.params["id"];
    //模拟一下在数据库中根据id获取信息
    if(productId == 1){
      return new Product(1, "iPhone7");
    }else{
      // 没有获得想要的数据，重定向到home页。
      // 重定向要用到Router对象，所以要在构造函数中注入Router，并且类要加装饰器@Injextable()
      this.router.navigate((['/home']));
      return undefined;
    }
  }
}
