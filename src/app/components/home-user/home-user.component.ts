import { Component } from '@angular/core';
import { virtualRouter } from '@app/services/virtualRouter.service';

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent {
constructor(
  public virtualRouter: virtualRouter
){}
}
