import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataApiService } from '@app/services/data-api-service';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(
    public virtualRouter: virtualRouter,
    public yeoman: Yeoman,
    public global: GlobalService,
    public dataApiService: DataApiService
  ){}
}
