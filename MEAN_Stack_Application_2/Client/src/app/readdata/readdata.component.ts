import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-readdata',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './readdata.component.html',
  styleUrl: './readdata.component.css',
  providers: [MarvellousService]
})

export class ReaddataComponent 
{
  public batches : any;

  public constructor(private sobj : MarvellousService)
  {
    
  }

  public ReadDataFromDatabase()
  {
    this.sobj.GetBatches().subscribe(data => { 
      this.batches = data
    });
  }
}
