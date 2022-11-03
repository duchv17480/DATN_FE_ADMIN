import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/common/User';
import { Favourite } from 'src/app/_model/favourite';
import { Product } from 'src/app/_model/product';
import { FavouriteService } from 'src/app/_service/favourite-service/favourite.service';
import { ProductApiService } from 'src/app/_service/product-service/product-api.service';
import { UserService } from 'src/app/_service/user-service/user.service';

@Component({
  selector: 'app-add-favourite',
  templateUrl: './add-favourite.component.html',
  styleUrls: ['./add-favourite.component.css']
})
export class AddFavouriteComponent implements OnInit {

  fav: Favourite = new Favourite();
  pros: Product[] = [];
  accs: User [] = [];
  likeDate: Date = new Date();
  validForm!: FormGroup;

  @Output()
  saveFinished: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modelService: NgbModal,
              private proSer: ProductApiService,
              private userSer: UserService,
              private favSer: FavouriteService) { }

  ngOnInit(): void {
    this.validForm = new FormGroup({
      'accountId': new FormControl(null, [Validators.required]),
      'productId': new FormControl(null, [Validators.required]),
    });

    this.showAllProduct();
    this.showAllUser();
  }

  open(content: TemplateRef<any>) {
    this.modelService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  showAllProduct() {
    this.proSer.getAllProduct(0,100)
    .subscribe(data => {
      this.pros = data.data;
    });
  }

  showAllUser() {
    this.userSer.getAllUser()
    .subscribe(data => {
      this.accs = data.data;
    })
  }

  createFavourite() {
    this.fav.likeDate = this.likeDate;
    let id = this.fav.productId;
    this.favSer.createFavourite(id, this.fav)
    .subscribe(data => {
      this.saveFinished.emit('New favourite is saved !')
      this.modelService.dismissAll();
    });
  }

}
