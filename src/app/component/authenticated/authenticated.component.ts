import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../../_service/auth-service/authentication.service';
import { TokenStorageService } from '../../_service/token-storage-service/token-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../_helper/confirm-dialog/confirm-dialog.component';
import { Constant } from '../../_constant/Constant';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['../../../../src/assets/static/css/core.css']
})
export class AuthenticatedComponent implements OnInit {

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
      routerLink: 'list-order',
      items: [
          {
            label: 'All Order',
            icon: 'pi pi-fw pi-tablet',
            routerLink: '/all-order',
        }
      ]
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

  user: any = {
    fullname: '',
    role: ''
  };

  constructor(
      private authService: AuthenticationService,
      private tokenService: TokenStorageService,
      private matDialog: MatDialog,
    ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.user.fullname = this.tokenService.getUser();
    this.user.role = this.tokenService.getUserRole();
  }

  logout(){
    this.matDialog.open(ConfirmDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      data: {
          message: 'Bạn có muốn đăng xuất?'
      }
    }).afterClosed().subscribe(result => {
        if (result === Constant.RESULT_CLOSE_DIALOG.CONFIRM) {
          this.authService.logout();
        }
    })
  }

}
