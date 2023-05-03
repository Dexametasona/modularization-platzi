import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataService:DataService) {}
  products:Product[]=[]

  ngOnInit(): void {
    this.dataService.getData().subscribe(data=>{
      this.products=data
    })
  }
}
