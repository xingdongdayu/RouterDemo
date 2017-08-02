import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";

export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(component: ProductComponent){
    return window.confirm("Not saved yet, are you sure to leave?");
  }
}
