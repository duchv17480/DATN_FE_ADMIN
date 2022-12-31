import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthenticationService } from './_service/auth-service/authentication.service';
import { TokenStorageService } from './_service/token-storage-service/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Admin';
  isLogin: any = false;

  constructor(
    private authService: AuthenticationService,
    private tokenService: TokenStorageService
  ){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('App.com');

  }

  items:MenuItem[] = [
    {
      label: 'Statistical',
      icon: 'bi bi-reception-4',
      routerLink: '/statistical'

  },
    {
      label: 'Buy offline',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/buy-offline'

    },
    {
        label: 'Product',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/list-product'

    },
    {
      label: 'Order',
      icon: 'pi pi-fw pi-tablet',
      routerLink: 'list-order'
    },
    {
      label: 'User',
      icon: 'pi pi-fw pi-user',
      routerLink: '/list-staff'

  },
    {
        label: 'Category',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/list-category'

    },
    {
      label: 'Group-component',
      icon: 'pi pi-fw pi-calendar',
      routerLink: '/groupcomponent'

  },
  {
    label: 'Brand',
    icon: 'pi pi-fw pi-calendar',
    routerLink: '/brand'

},
    {
        label: 'Main',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/main',
        items: [
            {
                label: 'Ram',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/ram',
            },
            {
                label: 'Vga',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/vga',
            },
            {
              label: 'Chip',
              icon: 'pi pi-fw pi-calendar',
              routerLink: '/list-chip'
             },
            {
                label: 'Case',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/case',
            },
            {
                label: 'Color',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/color',
            },
            {
                label: 'Hd',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/hd',
            },
            {
                label: 'Psu',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/psu',
            },
            {
                label: 'Image',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/list-image',
            }
        ]
    },
    {
        label: 'Review',
        icon: 'pi pi-fw pi-bookmark',
        routerLink: '/review/list'
    }
    // ,
    // {
    //   label: 'Order Detail',
    //   icon: 'pi pi-fw pi-tablet',
    //   // routerLink: '/review/list'
    // }
];

  logout(){
    this.authService.logout();
  }

  checkLogin(){
    this.isLogin = this.tokenService.isLoggedIn();
  }

}


