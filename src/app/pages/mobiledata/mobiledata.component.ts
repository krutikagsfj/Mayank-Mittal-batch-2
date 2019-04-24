import { Component, OnInit } from '@angular/core';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-mobiledata',
  templateUrl: './mobiledata.component.html',
  styleUrls: ['./mobiledata.component.css']
})
export class MobiledataComponent implements OnInit {

  constructor(private mob:MobileService) { }
  product=[];
  sortByAsc: boolean = true;
  ngOnInit() {
    this.mob.getProd().subscribe(res =>
      this.product = res);
  }
  del(value:any){
    let index = this.product.indexOf(value);
    if(index !== -1){
      this.product.splice(index,1);
    }
  }
  sortId(value:any){
    this.product.sort((a,b) => {return a.mobId - b.mobId})
  }
  sortPrice(value:any){
    this.product.sort((a,b) => {return a.mobPrice - b.mobPrice})
  }
  sortName(value:any){
    this.product.sort((a,b) => {return a.mobName.localeCompare(b.mobName)})
  }
}
