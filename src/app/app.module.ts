import { ForgotPasswordComponent } from './component/Auth/forgot-password/forgot-password.component';
import { EmailRegisterComponent } from './component/Auth/email-register/email-register.component';
import { RegisterComponent } from './component/Auth/register/register.component';
import { EditImageComponent } from './component/image/edit-image/edit-image.component';
import { AddImageComponent } from './component/image/add-image/add-image.component';
import { NgxPaginationModule } from 'ngx-pagination';
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

import { EditBrandComponent } from './component/Brands/edit-brand/edit-brand.component';
import { EditColorComponent } from './component/color/edit-color/edit-color.component';
import { ReviewListComponent } from './component/Review/review-list/review-list.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { EditCategoryComponent } from './component/Category/edit-category/edit-category.component';
import { ListCategoryComponent } from './component/Category/list-category/list-category.component';
import { MessageService } from 'primeng/api';
import { environment } from './../environments/environment';
import { PrimeModule } from './component/uiHelpers/prime/Prime.module';


import { LoginComponent } from './component/login/login.component';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';
import { Route,RouterModule } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { CarouselModule } from 'primeng/carousel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { GalleriaModule } from 'primeng/galleria';
import { AddCategoryComponent } from './component/Category/add-category/add-category.component';

import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupComponentComponent } from './component/Group/group-component/group-component.component';
import { ColorComponent } from './component/color/color-list/color.component';
import { AddGroupComponentComponent } from './component/Group/add-group-component/add-group-component.component';
import { BrandsComponent } from './component/Brands/brands-list/brands.component';
import { AuthInterceptor } from './_helper/auth.interceptor';
import { ListChipComponent } from './component/chip/list-chip/list-chip.component';
import { AddChipComponent } from './component/chip/add-chip/add-chip.component';
import { EditChipComponent } from './component/chip/edit-chip/edit-chip.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { DataTablesModule } from 'angular-datatables';
import { EditGroupComponentComponent } from './component/Group/edit-group-component/edit-group-component.component';
import { ListFavouriteComponent } from './component/favourite/list-favourite/list-favourite.component';
import { AddFavouriteComponent } from './component/favourite/add-favourite/add-favourite.component';
import { ListVoucherComponent } from './component/voucher/list-voucher/list-voucher.component';
import { CreateVoucherComponent } from './component/voucher/create-voucher/create-voucher.component';
import { UpdateVoucherComponent } from './component/voucher/update-voucher/update-voucher.component';
import { EditProductComponent } from './component/product/edit-product/edit-product.component';
import { ListStaffComponent } from './component/staff/list-staff/list-staff.component';
import { CreateStaffComponent } from './component/staff/create-staff/create-staff.component';
import { UpdateStaffComponent } from './component/staff/update-staff/update-staff.component';
import { AddColorComponent } from './component/color/add-color/add-color.component';
import { AddReviewComponent } from './component/Review/add-review/add-review.component';
import { AddBrandComponent } from './component/Brands/add-brand/add-brand.component';
import { EditReviewComponent } from './component/Review/edit-review/edit-review.component';
import { ListCaseComponent } from './component/Case/list-case/list-case.component';
import { AddCaseComponent } from './component/Case/add-case/add-case.component';
import { EditCaseComponent } from './component/Case/edit-case/edit-case.component';
import { ListRamComponent } from './component/Ram/list-ram/list-ram.component';
import { ListImageComponent } from './component/image/list-image/list-image.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


    GroupComponentComponent,
    AddGroupComponentComponent,
    EditGroupComponentComponent,

    ListRamComponent,
    RamComponent,
    EditRamComponent,

    ListMainComponent,
    AddMainComponent,
    EditMainComponent,

    ListPsuComponent,
    AddPsuComponent,
    EditPsuComponent,

    ListHdComponent,
    AddHdComponent,
    EditHdComponent,

    BrandsComponent,
    AddBrandComponent,
    EditBrandComponent,

    ListCaseComponent,
    AddCaseComponent,
    EditCaseComponent,

    ColorComponent,
    EditColorComponent,
    AddColorComponent,

    ReviewListComponent,
    AddReviewComponent,
    EditReviewComponent,

    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,

    ListChipComponent,
    AddChipComponent,
    EditChipComponent,

    ListProductComponent,
    AddProductComponent,
    EditProductComponent,

    ListImageComponent,
    AddImageComponent,
    EditImageComponent,

    RegisterComponent,
    EmailRegisterComponent,
    ForgotPasswordComponent,

    EditCategoryComponent,
    ListFavouriteComponent,
    AddFavouriteComponent,
    ListVoucherComponent,
    CreateVoucherComponent,
    UpdateVoucherComponent,
    ListStaffComponent,
    CreateStaffComponent,
    UpdateStaffComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    NgZorroAntdModule,
    AccordionModule,
    NgxPaginationModule,
    PanelModule,
    ButtonModule,
    CarouselModule,
    ScrollTopModule,
    GalleriaModule,
    DataTablesModule,
    MatStepperModule,
    MatFormFieldModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    PrimeModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      // progressBar: true,
      progressAnimation: 'increasing',
      // preventDuplicates: true,
      closeButton: true,
    }),
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    MessageService
    ,PrimeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
