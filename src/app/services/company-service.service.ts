import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  
  constructor(private http: HttpClient) { }

  public getStockDetailsForCompany(): void {
    // throw new Error('Method not implemented.');
    debugger;
    this.http.get("http://localhost:9999/api/v1.0/market/stock/get/1001/25-05-22/30-05-22")
    .subscribe(res=>{
      console.log(res);
    });
  }

}
