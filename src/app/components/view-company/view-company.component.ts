import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { DatePipe } from '@angular/common'
import { DetachedRouteHandle } from '@angular/router';
import { StockPrice } from 'src/app/models/app.models';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  // stockPriceList: Array<StockPrice>;
  stockPriceList?: StockPrice[] = [];
  companyCode: any;
  companyName: any;
  fromPeriod: any;
  toPeriod: any;
  startDate: any;
  endDate: any;

  currentDate = new Date();

  companyForm!: FormGroup;
  minStockPrice: any;
  maxStockPrice: any;
  avgStockPrice: any;
  validationText: string = "";
  formValid: boolean = false;
  constructor(private companyService: CompanyServiceService, public datepipe: DatePipe) {
    this.stockPriceList = [];
  }


  ngOnInit(): void {
    this.stockPriceList = [];
    this.companyForm = new FormGroup({
      comapnyCode: new FormControl(this.companyCode, [
        Validators.required,
        Validators.minLength(4),
        //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      comapnyName: new FormControl(this.companyName),
      fromPeriod: new FormControl(this.fromPeriod, Validators.required),
      toPeriod: new FormControl(this.toPeriod, Validators.required)
    });

  }
  onSubmit(myForm: NgForm): void {
    this.validationText="";
    console.log("Search submit!");
    console.log(this.companyCode);
    console.log(this.companyName);
    console.log(this.fromPeriod);
    console.log(this.toPeriod);

    // alert("Welcome");
    // myForm.getControl('companyCode');
    console.log(myForm.value);
    this.startDate = this.datepipe.transform(this.fromPeriod, "dd-MM-yy");
    this.endDate = this.datepipe.transform(this.toPeriod, "dd-MM-yy");
    console.log(this.startDate);
    console.log(this.endDate);

    if (myForm.valid && this.validateInputs()) {
      this.formValid = true;
      // this.validateInputs();
      this.companyService.getStockDetailsForCompany(this.companyCode, this.startDate, this.endDate)
        .subscribe(res => {
          console.log(res);
          if (res) {
            this.stockPriceList = res;
            var priceList = this.stockPriceList?.filter((obj) => {
              return Number(obj?.price);
            });

            console.log(priceList);
            this.maxStockPrice = Math.max(...priceList.map(o => o.price));
            this.minStockPrice = Math.min(...priceList.map(o => o.price));
            this.avgStockPrice = (this.maxStockPrice + this.minStockPrice) / 2;
          }
        });

    } else {
      this.formValid = false;
      this.validationText= this.validationText+ "Please fill/validate mandatory fields and Search!";
    }


  }
  
validateInputs():Boolean {
  var fromDate = this.startDate;
  var toDate = this.endDate;
  if ((fromDate !== null && toDate !== null) && fromDate < toDate) {
    this.validationText="";
    return true;
  } else {
    this.validationText = "Date fields are not appropriate! "
    return false;
  }  
}


}

