import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../service/all-products.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

   // Declare variables
   isLoged: boolean = false; // to toggle nav item if logeed home nav item if not hide nav item
   count: number = 0; // count prouduct in cart
 
   // Inject services in the constructor
   constructor(
     private _AllProductsService: AllProductsService,
     private _AuthServiceService: AuthService
   ) {}
 
   ngOnInit() {
     // Subscribe to countItem in shop cart observable
     this._AllProductsService.countItem.subscribe(
       (data) => (this.count = data)
     );
 
     // Subscribe to userData observable
     // and update the isLoged variable based on the value
     this._AuthServiceService.userData.subscribe(() => {
       if (this._AuthServiceService.userData.getValue() != null) {
         this.isLoged = true;
       } else {
         this.isLoged = false;
       }
     });
   }
 
   // Function to send searchTerm to the searchSubject observable
   search(searchTerm: string) {
     this._AllProductsService.searchSubject.next(searchTerm);
   }

  
}
