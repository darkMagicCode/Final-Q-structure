import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../service/all-products.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _AllProductsService: AllProductsService,
    private _AuthServiceService: AuthService
  ) {}

  isLoged: boolean = false;
  count: number = 0;
  //**********************************  serach function   *************************
  typing(value: string) {
    this._AllProductsService.setWord(value);
  }

  ngOnInit(): void {
    //**********************************  count item     *************************

    this._AllProductsService.countItem.subscribe((data) => (this.count = data));

    //**********************************  nav link hide and show if auth    *************************

    this._AuthServiceService.userData.subscribe(() => {
      if (this._AuthServiceService.userData.getValue() != null) {
        this.isLoged = true;
      } else {
        this.isLoged = false;
      }
    });
  }
}
