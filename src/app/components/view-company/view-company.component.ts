import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm):void{
    debugger;
    console.log("Welcome");
    alert("Welcome");

    this.companyService.getStockDetailsForCompany();
  }

}
