import { ListOrdersComponent } from './component/Oder/list-orders/list-orders.component';
import { ListOrderComponent } from './component/Oder/list-order/list-order.component';
import { EditPaymentComponent } from './component/payment/edit-payment/edit-payment.component';
import { AddPaymentComponent } from './component/payment/add-payment/add-payment.component';
import { ListPaymentComponent } from './component/payment/list-payment/list-payment.component';
import { AddImageComponent } from './component/image/add-image/add-image.component';
import { EditImageComponent } from './component/image/edit-image/edit-image.component';
import { ListImageComponent } from './component/image/list-image/list-image.component';
import { EditMainComponent } from './component/Main/edit-main/edit-main.component';
import { AddMainComponent } from './component/Main/add-main/add-main.component';
import { ListMainComponent } from './component/Main/list-main/list-main.component';
import { EditHdComponent } from './component/HD/edit-hd/edit-hd.component';
import { AddHdComponent } from './component/HD/add-hd/add-hd.component';
import { ListHdComponent } from './component/HD/list-hd/list-hd.component';
import { EditPsuComponent } from './component/Psu/edit-psu/edit-psu.component';
import { AddPsuComponent } from './component/Psu/add-psu/add-psu.component';
import { ListPsuComponent } from './component/Psu/list-psu/list-psu.component';
import { EditRamComponent } from './component/Ram/edit-ram/edit-ram.component';
import { RamComponent } from './component/Ram/add-ram/ram.component';
import { EditCaseComponent } from './component/Case/edit-case/edit-case.component';
import { AddCaseComponent } from './component/Case/add-case/add-case.component';
import { ListCaseComponent } from './component/Case/list-case/list-case.component';
import { EditReviewComponent } from './component/Review/edit-review/edit-review.component';
import { EditBrandComponent } from './component/Brands/edit-brand/edit-brand.component';
import { AddBrandComponent } from './component/Brands/add-brand/add-brand.component';
import { EditColorComponent } from './component/color/edit-color/edit-color.component';
import { AddReviewComponent } from './component/Review/add-review/add-review.component';
import { ReviewListComponent } from './component/Review/review-list/review-list.component';
import { AddColorComponent } from './component/color/add-color/add-color.component';

import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { EditGroupComponentComponent } from './component/Group/edit-group-component/edit-group-component.component';
import { BrandsComponent } from './component/Brands/brands-list/brands.component';
import { AddGroupComponentComponent } from './component/Group/add-group-component/add-group-component.component';
import { ColorComponent } from './component/color/color-list/color.component';
import { GroupComponentComponent } from './component/Group/group-component/group-component.component';
import { AddCategoryComponent } from './component/Category/add-category/add-category.component';

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
import { CreateVoucherComponent } from './component/voucher/create-voucher/create-voucher.component';
import { UpdateVoucherComponent } from './component/voucher/update-voucher/update-voucher.component';
import { ListStaffComponent } from './component/staff/list-staff/list-staff.component';
import { CreateStaffComponent } from './component/staff/create-staff/create-staff.component';
import { UpdateStaffComponent } from './component/staff/update-staff/update-staff.component';
import { ListRamComponent } from './component/Ram/list-ram/list-ram.component';
import { RegisterComponent } from './component/Auth/register/register.component';
import { EmailRegisterComponent } from './component/Auth/email-register/email-register.component';
import { ForgotPasswordComponent } from './component/Auth/forgot-password/forgot-password.component';
import { InfoOrderComponent } from './component/Oder/info-order/info-order.component';


const routes: Routes=[
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  { path: 'add-category', component: AddCategoryComponent },
  { path: 'list-category', component: ListCategoryComponent},
  { path: 'edit-category/:id', component: EditCategoryComponent},

  { path: 'list-order', component: ListOrderComponent},
  { path: 'list-orders', component: ListOrdersComponent},
  { path: 'info-order/:id', component: InfoOrderComponent},


  { path: 'add-product', component: AddProductComponent},
  { path: 'list-product', component: ListProductComponent},
  { path: 'edit-product/:id', component: EditProductComponent},

  { path: 'ram', component: ListRamComponent},
  { path: 'ram/create', component: RamComponent},
  { path: 'ram/update/:id', component: EditRamComponent},

  { path:'register', component: RegisterComponent},
  { path:'emailRegister', component: EmailRegisterComponent},
  { path:'forgotPassword', component: ForgotPasswordComponent},

  { path: 'hd', component: ListHdComponent},
  { path: 'hd/create', component: AddHdComponent},
  { path: 'hd/update/:id', component: EditHdComponent},

  { path: 'psu', component: ListPsuComponent},
  { path: 'psu/create', component: AddPsuComponent},
  { path: 'psu/update/:id', component: EditPsuComponent},

  { path: 'main', component: ListMainComponent},
  { path: 'main/create', component: AddMainComponent},
  { path: 'main/update/:id', component: EditMainComponent},

  { path: 'case', component: ListCaseComponent },
  { path: 'case/create', component: AddCaseComponent },
  { path: 'case/update/:id', component: EditCaseComponent },

  { path: 'groupcomponent', component: GroupComponentComponent },
  { path: 'groupcomponent/add', component: AddGroupComponentComponent},
  { path: 'groupcomponent/:id', component: EditGroupComponentComponent },

  { path: 'brand', component: BrandsComponent},
  { path: 'brand/add', component: AddBrandComponent},
  { path: 'brand/edit/:id', component: EditBrandComponent},

  { path: 'color', component: ColorComponent },
  { path: 'color/add', component: AddColorComponent },
  { path: 'color/edit/:id', component: EditColorComponent },

  { path: 'review/list', component: ReviewListComponent },
  { path: 'review/create/:id', component: AddReviewComponent },
  { path: 'review/update/:id', component: EditReviewComponent },

  { path: 'list-image', component: ListImageComponent},
  { path: 'add-image', component: AddImageComponent},
  { path: 'edit-image/:id', component: EditImageComponent},

  { path: 'list-payment', component: ListPaymentComponent},
  { path: 'add-payment', component: AddPaymentComponent},
  { path: 'edit-payment/:id', component: EditPaymentComponent},



  // { path: 'users', component: UsersComponent },
  { path: 'add-chip', component: AddChipComponent},
  { path: 'list-chip', component: ListChipComponent},
  { path: 'list-favourite', component: ListFavouriteComponent},
  { path: 'add-favourite', component: AddFavouriteComponent},
  { path: 'list-voucher', component: ListVoucherComponent},
  { path: 'add-voucher', component: CreateVoucherComponent},
  { path: 'edit-voucher/:id', component: UpdateVoucherComponent},
  { path: 'list-staff', component: ListStaffComponent},
  { path: 'add-staff', component: CreateStaffComponent},
  { path: 'update-staff/:id', component: UpdateStaffComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
