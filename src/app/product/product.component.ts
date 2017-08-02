import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId: number;
  private productUrlId: number;
  constructor(private routeInfo: ActivatedRoute) { }
  ngOnInit() {
    this.productId = this.routeInfo.snapshot.queryParams["id"];
    //this.productUrlId = this.routeInfo.snapshot.params["id"];
    this.routeInfo.params.subscribe((params: Params) => this.productUrlId = params["id"]);
  }
}
