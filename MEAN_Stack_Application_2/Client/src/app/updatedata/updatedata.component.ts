import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatedata',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './updatedata.component.html',
  styleUrl: './updatedata.component.css',
  providers: [MarvellousService]
})

export class UpdatedataComponent 
{
  public Name : any;
  public Duration : any;
  public Fees : any;

  public changeData : any;
  public selectKey : any;

  public batches : any;
  public dataIsUpdated : boolean = false;

  public constructor(private sobj : MarvellousService) { }

  public UpdateData()
  {
    this.dataIsUpdated = true;
    this.sobj.UpdateData(this.selectKey, this.changeData, this.Name).subscribe(data => this.batches = data);
  }
}
