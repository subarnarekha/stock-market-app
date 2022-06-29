import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockPrice } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {
  
  constructor(private http: HttpClient) { }

  stock_price_url:string ="http://15.207.112.161:8743";
  // stock_price_url:string ="http://localhost:8743";

  
  public getStockDetailsForCompany(companyCode:string, startDate: string, endDate: string): Observable<Object> {        
    //var search_endpoint="/api/v1.0/market/stock/get/1001/25-05-22/30-05-22";
    var search_endpoint = "/api/v1.0/market/stock/get/" + companyCode + "/" + startDate + "/" + endDate;
    return this.http.get(this.stock_price_url + search_endpoint, {
      headers: {
        "Access-Control-Allow-Origin": "*/*"
      }
    });
   /*  .subscribe(res=>{
      console.log(res);
      return res;
    }); */
  }

}
