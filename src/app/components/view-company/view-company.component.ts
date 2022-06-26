import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  stockPriceList: any;
  companyCode: any;
  companyName: any;
  startDate: any;
  endDate: any;
  constructor(private companyService: CompanyServiceService) {
    this.stockPriceList = [];
  }


  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm): void {    
    console.log("Search submit!");
    console.log(this.companyCode);
    console.log(this.companyName);
    console.log(this.startDate);
    console.log(this.endDate);
    // alert("Welcome");
   // myForm.getControl('companyCode');
    console.log(myForm.value);
    this.companyService.getStockDetailsForCompany(this.companyCode, this.startDate, this.endDate)
    .subscribe(res => {
      console.log(res);
      this.stockPriceList = res;
    });
  }

}
