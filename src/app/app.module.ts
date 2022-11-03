import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { EditCategoryComponent } from './component/Category/edit-category/edit-category.component';
import { ListCategoryComponent } from './component/Category/list-category/list-category.component';
import { MessageService } from 'primeng/api';
import { environment } from './../environments/environment';
import { PrimeModule } from './component/uiHelpers/prime/Prime.module';
import { UsersComponent } from './component/users/users.component';

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
import { ColorComponent } from './component/color/color.component';
import { AddGroupComponentComponent } from './component/Group/add-group-component/add-group-component.component';
import { BrandsComponent } from './component/brands/brands.component';
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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    GroupComponentComponent,
    ColorComponent,
    AddGroupComponentComponent,
    BrandsComponent,

    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,

    ListChipComponent,
    AddChipComponent,
    EditChipComponent,

    ListProductComponent,
    AddProductComponent,
    EditProductComponent,

    EditCategoryComponent,
    EditGroupComponentComponent,
    ListFavouriteComponent,
    AddFavouriteComponent,
    ListVoucherComponent,
    CreateVoucherComponent,
    UpdateVoucherComponent

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
    PanelModule,
    ButtonModule,
    CarouselModule,
    ScrollTopModule,
    GalleriaModule,
    DataTablesModule,
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
