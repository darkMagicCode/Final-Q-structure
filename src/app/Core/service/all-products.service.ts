import { environment } from './../../../environment/environment';
import { Injectable } from '@angular/core';
import { Iproduct } from '../../shared/interfaces/all-products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private _HttpClient: HttpClient) {}
  //***************************************** observ on count var so i can subscbe on it any where  **************
  countItem = new BehaviorSubject<number>(0);
  count: number = 0;

  setcount() {
    this.count = this.countItem.getValue();
    this.count++;
    this.countItem.next(this.count);
  }
  getcount() {
    return this.count;
  }
  //***************************************** observ on search var so i can communicate home and header  **************

  private word = new BehaviorSubject<string>('');

  private word$ = this.word.asObservable();

  setWord(value: string) {
    this.word.next(value);
  }
  getword(): Observable<string> {
    return this.word$;
  }

  //******************************************* Main api for page and home   **************

  getProductPages(limit: number = 9, skip: number = 0): Observable<Iproduct> {
    return this._HttpClient.get<Iproduct>(
      `${environment.APIurl}/products?limit=${limit}&skip=${skip}`
    );
  }

  //************************************************** get product based on category  **************

  getProductByCate(prodCate: string): Observable<Iproduct> {
    return this._HttpClient.get<Iproduct>(
      `${environment.APIurl}/products/category/${prodCate}`
    );
  }

  //************************************************** get product based on category  **************

  getAllCate(): Observable<string[]> {
    return this._HttpClient.get<string[]>(
      `${environment.APIurl}/products/categories`
    );
  }
  //****************************************** search product   **************

  searchProd: any;
  searchProductByName(prodName: string): Observable<Iproduct> {
    return (this.searchProd = this._HttpClient.get<Iproduct>(
      `${environment.APIurl}/products/search?q=${prodName}`
    ));
  }
  //************************************** all product on  the api  **************

  getAllProduct(): Observable<Iproduct> {
    return this._HttpClient.get<Iproduct>(`${environment.APIurl}/products`);
  }
  
}
