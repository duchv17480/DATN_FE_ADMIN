import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { EditGroupComponentComponent } from './component/Group/edit-group-component/edit-group-component.component';
import { BrandsComponent } from './component/brands/brands.component';
import { AddGroupComponentComponent } from './component/Group/add-group-component/add-group-component.component';
import { ColorComponent } from './component/color/color.component';
import { GroupComponentComponent } from './component/Group/group-component/group-component.component';
import { AddCategoryComponent } from './component/Category/add-category/add-category.component';
import { UsersComponent } from './component/users/users.component';
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
import { AddProductComponent } from './component/product/add-product/add-product.component';

const routes: Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  { path: 'add-category', component: AddCategoryComponent },
  { path: 'list-category', component: ListCategoryComponent},
  { path: 'edit-category/:id', component: EditCategoryComponent},

  { path: 'add-product', component: AddProductComponent},
  { path: 'list-product', component: ListProductComponent},
  { path: 'edit-product/:id', component: EditProductComponent},



  { path: 'groupcomponent', component: GroupComponentComponent },
  { path: 'groupcomponent/add', component: AddGroupComponentComponent},
  { path: 'groupcomponent/:id', component: EditGroupComponentComponent },
  { path: 'brand', component: BrandsComponent},
  { path: 'color', component: ColorComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-chip', component: AddChipComponent},
  { path: 'list-chip', component: ListChipComponent},
  { path: 'list-favourite', component: ListFavouriteComponent},
  { path: 'add-favourite', component: AddFavouriteComponent},
  { path: 'list-voucher', component: ListVoucherComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
