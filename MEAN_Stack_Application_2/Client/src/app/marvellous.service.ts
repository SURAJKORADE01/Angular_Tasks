import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MarvellousService 
{
  public url1 = "http://localhost:6700/getbatches";
  public url2 = "http://localhost:6700/updatedata";
  public url3 = "http://localhost:6700/insertdata"
  public url4 = "http://localhost:6700/deletedata"

  public constructor(private http : HttpClient) { }

  public GetBatches()
  {
    return this.http.get(this.url1);
  }

  public UpdateData(selectData : string, changeData : string, name : string)
  {
    const body = {Name : name, selectData, changeData};
    return this.http.post(this.url2,body);
  }

  public InsertData(name: string, duration: string, fees : string)
  {
    const body = {Name : name, Duration : duration, Fees : fees};
    return this.http.post(this.url3,body);
  }

  public DeleteData(name : string)
  {
    const body = {BatchName : name}
    return this.http.post(this.url4,body);
  }
}
