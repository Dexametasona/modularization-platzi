import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit{
  constructor(private dataService:DataService) {}
  products:Product[]=[]

  ngOnInit(): void {
    this.dataService.getDataCategory().subscribe(data=>{
      this.products=data
    })
  }
}
