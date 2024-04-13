import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public global:GlobalService,
    public virtualRouter: virtualRouter
  ){}
}
