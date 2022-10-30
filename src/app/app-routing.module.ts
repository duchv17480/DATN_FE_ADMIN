import { BrandsComponent } from './component/brands/brands.component';
import { AddGroupComponentComponent } from './component/add-group-component/add-group-component.component';
import { ColorComponent } from './component/color/color.component';
import { GroupComponentComponent } from './component/group-component/group-component.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChipComponent } from './component/chip/list-chip/list-chip.component';
import { AddChipComponent } from './component/chip/add-chip/add-chip.component';

const routes: Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: AddCategoryComponent },
  { path: 'groupcomponent', component: GroupComponentComponent },
  { path: 'groupcomponent/add', component: AddGroupComponentComponent},
  { path: 'brand', component: BrandsComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'color', component: ColorComponent },
  { path: 'users', component: UsersComponent },

  { path: 'add-chip', component: AddChipComponent},
  { path: 'list-chip', component: ListChipComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
