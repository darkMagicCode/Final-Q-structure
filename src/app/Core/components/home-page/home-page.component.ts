import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Iproduct } from '../../../shared/interfaces/all-products';
import { AllProductsService } from '../../service/all-products.service';
import {  Subscription, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private _AllProductsService: AllProductsService) {}
  private allSubscription!: Subscription[];

  //------------------ Properties -------------------
  allCate: string[] = []; // array to hold all categories
  allProduct: Iproduct[] = []; // array to hold all products
  pageCounts = new Array(9); // array to hold page numbers
  changeColor: number = 0; // variable to hold selected page number so i can chage its color
  currentCate: string = ''; // variable to hold current category
  item: string = ''; // variable to hold category keyword
  hideittem: boolean = false; // boolean to hide or show category results
  searchVal: string = ''; // variable to hold search value
  pageNumber: number = 1;
  // -------------------Lifecycle Hooks-------------------

  
  // -------------------Lifecycle Hooks-------------------
  ngOnInit() {
    // -------------------get search result-------------------

 this._AllProductsService.searchSubject
      .pipe(debounce(() => timer(500)))
      .subscribe((searchTerm) => {
        this._AllProductsService
          .searchProductByName(searchTerm)
          .subscribe((data) => (this.allProduct = data.products));
      });
      
      // -------------------get all product-------------------
      
      this._AllProductsService
      .getAllProduct()
      .subscribe((data) => (this.allProduct = data.products));
      
      
      // -------------------get all catget names only-------------------
      
      this._AllProductsService
      .getAllCate()
      .subscribe((data) => (this.allCate = data));
      
    }
    
    ngAfterViewInit() {
      console.log('Views initialized');
    }
    // Methods
  // -------------------Method for handling page selection-----------

  pagesNum(pageNumber: number, changeColor: number) {
      // Update the changeColor property with the provided value of page number 
    this.pageNumber = pageNumber;
    this.changeColor = changeColor;
    if (this.changeColor <0 ) {
      this.changeColor =0
    }
    if (this.changeColor >=9 ) {
      this.changeColor =0
    }
  // Subscribe to the getProductPages method of the AllProductsService
  // and update the allProduct property with the returned data
    let subscription6 = this._AllProductsService
      .getProductPages(9, pageNumber)
      .subscribe((data) => (this.allProduct = data.products));
      // Push the subscription to the allSubscription array

      this.allSubscription.push(subscription6);

  }
  // -------------------Method for handling category selection-----------

  getcurrCate(event: Event) {
      // Check if the event target ( checkbox) is checked

    if ((event.target as HTMLInputElement).checked == true) {
       // If checked, set the accentColor style of the event target
    // and update the hideittem, item, and currentCate properties
      (event.target as HTMLInputElement).style.accentColor = '#56D9D9';
      this.hideittem = true;
      this.item = (event.target as HTMLInputElement).value;
      this.currentCate = (event.target as HTMLInputElement).value;

    // Subscribe to the getProductByCate method of the AllProductsService
    // and update the allProduct property with the returned data
     this._AllProductsService
        .getProductByCate(this.currentCate)
     .subscribe((data) => (this.allProduct = data.products));
          // Push the subscription to the allSubscription array

    }
      // Check if the event target (checkbox) is not checked

    if ((event.target as HTMLInputElement).checked == false) {
          // If not checked, set the hideittem property to false so page will return to defult view of product

      this.hideittem = false;
 // Subscribe to the getAllProduct method of the AllProductsService
    // and update the allProduct property with the returned data
       this._AllProductsService
        .getAllProduct()
        .subscribe((data) => (this.allProduct = data.products));
      

    }

  }
  // -------------------Lifecycle Hooks-------------------

  ngOnDestroy() {
    this.allSubscription.forEach(subscription => subscription.unsubscribe());  }
}
