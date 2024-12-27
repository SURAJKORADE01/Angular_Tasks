import { Component } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent 
{
  public batches : any;

  public constructor(private sobj : MarvellousService)
  {
    sobj.GetBatches().subscribe(data => this.batches = data);
  }
}