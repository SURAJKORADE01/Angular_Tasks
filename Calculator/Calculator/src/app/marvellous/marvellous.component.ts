import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: false,
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css'],
})

export class MarvellousComponent
{
  public Decimal: number;
  public Octal: number;
  public Hexadecimal: number;
  public Binary: number;

  public iRet: string = "";
  public sRet: string = "";

  public selectedNumber: string = "";
  public toConvertNumber: string = "";

  public constructor() {
    this.Decimal = 0;
    this.Binary = 0;
    this.Hexadecimal = 0;
    this.Octal = 0;

    this.iRet = "";
    this.sRet = "";
  }

  public FromMethod(str : string)
  {
    this.selectedNumber = str?.toString();
  }

  public ToMethod(str :string)
  {
    this.toConvertNumber = str?.toString();
  }

  public ConvertData(iNo: string) 
  {
    let iValue : number;

    if(this.selectedNumber == 'Binary')
    {
      if(this.toConvertNumber == 'Octal')
      {
        iValue = parseInt(iNo,2);
        this.iRet = iValue.toString(8);
      }

      else if(this.toConvertNumber == 'Decimal')
      {
        iValue = parseInt(iNo,2);
        this.iRet = iValue.toString(10);
      }

      else if(this.toConvertNumber == 'Hexadecimal')
      {
        iValue = parseInt(iNo,2);
        this.iRet = iValue.toString(16);
      }

      else if(this.toConvertNumber == 'Binary')
      {
        iValue = parseInt(iNo,2);
        this.iRet = iValue.toString(2);
      }
    }

    else if(this.selectedNumber == 'Octal')
    {
      if(this.toConvertNumber == 'Binary')
      {
        iValue = parseInt(iNo, 8);
        this.iRet = iValue.toString(2);
      }

      else if(this.toConvertNumber == 'Decimal')
      {
        iValue = parseInt(iNo, 8);
        this.iRet = iValue.toString(10);
      }

      else if(this.toConvertNumber == 'Hexadecimal')
      {
        iValue = parseInt(iNo, 8);
        this.iRet = iValue.toString(16);
      }

      else if(this.toConvertNumber == 'Octal')
      {
        iValue = parseInt(iNo,8);
        this.iRet = iValue.toString(8);
      }
    }

    else if(this.selectedNumber == 'Decimal')
    {
      if(this.toConvertNumber == 'Binary')
      {
        iValue = parseInt(iNo, 10);
        this.iRet = iValue.toString(2);
      }

      else if(this.toConvertNumber == 'Octal')
      {
        iValue = parseInt(iNo, 10);
        this.iRet = iValue.toString(8);
      }

      else if(this.toConvertNumber == 'Hexadecimal')
      {
        iValue = parseInt(iNo, 10);
        this.iRet = iValue.toString(16);
      }

      else if(this.toConvertNumber == 'Decimal')
      {
        iValue = parseInt(iNo,10);
        this.iRet = iValue.toString(10);
      }
    }

    else if(this.selectedNumber == 'Hexadecimal')
    {
      if(this.toConvertNumber == 'Binary')
      {
        iValue = parseInt(iNo, 16);
        this.iRet = iValue.toString(2);
      }

      else if(this.toConvertNumber == 'Octal')
      {
        iValue = parseInt(iNo, 16);
        this.iRet = iValue.toString(8);
      }

      else if(this.toConvertNumber == 'Decimal')
      {
        iValue = parseInt(iNo, 16);
        this.iRet = iValue.toString(10);
      }

      else if(this.toConvertNumber == 'Hexadecimal')
      {
        iValue = parseInt(iNo,16);
        this.iRet = iValue.toString(16);
      }
    }
  }
}
