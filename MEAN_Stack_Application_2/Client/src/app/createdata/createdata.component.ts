import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-createdata',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './createdata.component.html',
  styleUrl: './createdata.component.css',
  providers: [MarvellousService]
})

export class CreatedataComponent 
{
  public batches : any;
  public bIsDataInserted : boolean = false;

  public Name : any;
  public Duration : any;
  public Fees : any;

  public constructor(private sobj : MarvellousService) { }


  public Adddata()
  {
    this.bIsDataInserted = true;
    this.sobj.InsertData(this.Name, this.Duration, this.Fees).subscribe(data=> this.batches = data);
  }

}
