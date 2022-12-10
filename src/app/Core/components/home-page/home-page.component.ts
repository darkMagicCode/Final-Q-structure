import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../../shared/interfaces/all-products';
import { AllProductsService } from '../../service/all-products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _AllProductsService: AllProductsService) {}
  allCate: string[] = [];
  allProduct: Iproduct[] = [];
  pageCounts = new Array(9);
  changeColor: number = 0;
  pagesNum(pageNumber: number, changeColor: number) {
    this._AllProductsService
      .getProductPages(9, pageNumber)
      .subscribe((data) => (this.allProduct = data.products));
    this.changeColor = changeColor;
  }

  currentCate: string = '';
  item: string = '';

  hideittem: boolean = false;

  getcurrCate(event: Event) {
    if ((event.target as HTMLInputElement).checked == true) {
      (event.target as HTMLInputElement).style.accentColor = '#56D9D9';
      this.item = (event.target as HTMLInputElement).value;
      this.hideittem = true;
      this.currentCate = (event.target as HTMLInputElement).value;
      this._AllProductsService
        .getProductByCate(this.currentCate)
        .subscribe((data) => {
          this.allProduct = data.products;
        });
    }
    if ((event.target as HTMLInputElement).checked == false) {
      this.hideittem = false;

      this._AllProductsService
        .getAllProduct()
        .subscribe((data) => (this.allProduct = data.products));
    }
  }

  ngOnInit() {
    this._AllProductsService.getword().subscribe((datax) => {
      this._AllProductsService
        .searchProductByName(datax)
        .subscribe(
          (data) => ((this.allProduct = data.products), (this.item = datax))
        );
    });
    this._AllProductsService
      .getAllProduct()
      .subscribe((data) => (this.allProduct = data.products));
    this._AllProductsService
      .getAllCate()
      .subscribe((data) => (this.allCate = data));
  }

  searchVal: string = '';
}
