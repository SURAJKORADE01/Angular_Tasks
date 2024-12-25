import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-deletedata',
  standalone : true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './deletedata.component.html',
  styleUrl: './deletedata.component.css',
  providers : [MarvellousService]
})

export class DeletedataComponent 
{
  public batches : any;
  public bIsDataDeleted : boolean = false;

  public BatchName : any;

  public constructor(private sobj : MarvellousService) { }

  public Delete()
  {
    this.bIsDataDeleted = true;
    this.batches = this.sobj.DeleteData(this.BatchName).subscribe(data => this.batches = data);
  }
}
