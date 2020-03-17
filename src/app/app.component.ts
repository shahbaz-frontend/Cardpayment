import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PaymentCard';
  cardOnName: string = '';
  cardHolderName: string = '';
  cardMonths: string = '';
  cardyear: string = '';
  cardCVC: string = '';
  ngOnInit(){
  
  }  
}


