import { BrandsComponent } from './component/brands/brands.component';
import { AddGroupComponentComponent } from './component/add-group-component/add-group-component.component';
import { ColorComponent } from './component/color/color.component';
import { GroupComponentComponent } from './component/group-component/group-component.component';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { UsersComponent } from './component/users/users.component';
import { ProductsComponent } from './component/products/products.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: AddCategoryComponent },
  { path: 'groupcomponent', component: GroupComponentComponent },
  { path: 'groupcomponent/add', component: AddGroupComponentComponent},
  { path: 'brand', component: BrandsComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'color', component: ColorComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
