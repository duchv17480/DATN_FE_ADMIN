import { EditGroupComponentComponent } from './component/Group/edit-group-component/edit-group-component.component';
import { BrandsComponent } from './component/brands/brands.component';
import { AddGroupComponentComponent } from './component/Group/add-group-component/add-group-component.component';
import { ColorComponent } from './component/color/color.component';
import { GroupComponentComponent } from './component/Group/group-component/group-component.component';
import { AddCategoryComponent } from './component/Category/add-category/add-category.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChipComponent } from './component/chip/list-chip/list-chip.component';
import { AddChipComponent } from './component/chip/add-chip/add-chip.component';
import { EditCategoryComponent } from './component/Category/edit-category/edit-category.component';
import { ListFavouriteComponent } from './component/favourite/list-favourite/list-favourite.component';
import { AddFavouriteComponent } from './component/favourite/add-favourite/add-favourite.component';
import { ListVoucherComponent } from './component/voucher/list-voucher/list-voucher.component';
import { ListCategoryComponent } from './component/Category/list-category/list-category.component';
import { CreateVoucherComponent } from './component/voucher/create-voucher/create-voucher.component';
import { UpdateVoucherComponent } from './component/voucher/update-voucher/update-voucher.component';
import { ListStaffComponent } from './component/staff/list-staff/list-staff.component';
import { CreateStaffComponent } from './component/staff/create-staff/create-staff.component';
import { UpdateStaffComponent } from './component/staff/update-staff/update-staff.component';

const routes: Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  { path: 'add-category', component: AddCategoryComponent },
  { path: 'list-category', component: ListCategoryComponent},
  { path: 'edit-category/:id', component: EditCategoryComponent},


  { path: 'groupcomponent', component: GroupComponentComponent },
  { path: 'groupcomponent/add', component: AddGroupComponentComponent},
  { path: 'groupcomponent/:id', component: EditGroupComponentComponent },
  { path: 'brand', component: BrandsComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'color', component: ColorComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-chip', component: AddChipComponent},
  { path: 'list-chip', component: ListChipComponent},
  { path: 'list-favourite', component: ListFavouriteComponent},
  { path: 'add-favourite', component: AddFavouriteComponent},
  { path: 'list-voucher', component: ListVoucherComponent},
  { path: 'add-voucher', component: CreateVoucherComponent},
  { path: 'edit-voucher', component: UpdateVoucherComponent},
  { path: 'list-staff', component: ListStaffComponent},
  { path: 'add-staff', component: CreateStaffComponent},
  { path: 'update-staff/:id', component: UpdateStaffComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
