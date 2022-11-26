import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin';


  items:MenuItem[] = [
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
      label: 'Staff',
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
    },
    {
      label: 'Order Detail',
      icon: 'pi pi-fw pi-tablet',
      // routerLink: '/review/list'
    }
];
}


