import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MarvellousService 
{
  public url = "http://localhost:5500/getBatches";

  public constructor(private http : HttpClient) { }

  public GetBatches()
  {
    return this.http.get(this.url);
  }
}
