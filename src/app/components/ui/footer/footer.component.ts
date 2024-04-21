import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataApiService } from '@app/services/data-api-service';
import { GlobalService } from '@app/services/global.service';
import { virtualRouter } from '@app/services/virtualRouter.service';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor (
  public globalService: GlobalService,
  public virtualRouter: virtualRouter,
  public yeoman: Yeoman,
  public dataApiService: DataApiService
){}
setPreview(i:any){
  this.yeoman.preview=this.yeoman.products[i];
 /*  this.virtualRouter.navigate(['detail']); */
}
getAllProducts(){
 
  this.dataApiService.getAllProducts().subscribe(response=>{
    this.yeoman.products=response;

  });
}
getAllCategories() {
  this.dataApiService.getAllCategory().subscribe(response => {
   /*  this.yeoman.categories = response; */
    this.yeoman.allcategory = response;
/*     this.yeoman.allCategoriesSize = this.yeoman.categories.length;
 */  });
}
}
