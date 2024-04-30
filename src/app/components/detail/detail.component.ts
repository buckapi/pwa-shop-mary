import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { Yeoman } from '@app/services/yeoman.service';
import { GlobalService } from '@app/services/global.service';
import { DataApiService } from '@app/services/data-api-service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
constructor(
  public virtualRouter: virtualRouter,
  public yeoman: Yeoman,
  public dataApiService: DataApiService,
  public global: GlobalService
 
)
{}

}
