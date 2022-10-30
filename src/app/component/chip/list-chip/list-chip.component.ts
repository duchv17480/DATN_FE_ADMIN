import { Component, OnInit, TemplateRef } from '@angular/core';
import { Chip } from '../../../_model/chip';
import { ChipApiService } from '../../../_service/chip-service/chip-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-chip',
  templateUrl: './list-chip.component.html',
  styleUrls: ['./list-chip.component.css']
})
export class ListChipComponent implements OnInit {

  chips!: Chip[];
  chip :Chip = new Chip();
  id! :number;

  deleteId! :number;
  confirmMessage= '';

  constructor(
    private rest: ChipApiService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
   ) {

     }

  ngOnInit() {
    this.getChip();
  }

  confirmDeleteChip(confirmDialog: TemplateRef<any>, id: number, name: string){
    this.confirmMessage = `Do you want to delete ${name} ?`;
    this.deleteId = id;
    this.modalService.open(confirmDialog,
      {ariaDescribedBy:'modal-basic-title'}).result.then((result)=>{
      }).catch((err)=>{

      })
  }

  deleteChip(){
    if(this.deleteId != null){
      this.rest.delete(this.deleteId).subscribe(data=>{
        this.modalService.dismissAll();
        this.ngOnInit();
      })
    }
  }

  getChip() {
    this.rest.getAll().subscribe(data => {
      this.chips = data.data;
    })
  }

  finishAndAlert(message: string){
    this.ngOnInit();
  }


}
