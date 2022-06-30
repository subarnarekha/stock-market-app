

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
  
export interface StockPrice {
  id_stock_price: string;
  companyCode: number;
  price: number;
  date: string;
  time?: string;  
}

  /* CONST stock_price_list =
    [
        { "id_stock_price": 6, "companyCode": "1001", "price": 2000.0, "date": "1653503400000", "time": "1653523200000" }, 
        { "id_stock_price": 8, "companyCode": "1001", "price": 3000.0, "date": "1653589800000", "time": "1653609600000" }, 
        { "id_stock_price": 9, "companyCode": "1001", "price": 3000.0, "date": "1653676200000", "time": "1653696000000" }, 
        { "id_stock_price": 10, "companyCode": "1001", "price": 3000.0, "date": "1653762600000", "time": "1653782400000" }
    ]
 */