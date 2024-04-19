import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { virtualRouter } from './services/virtualRouter.service'; // Asegúrate de que la ruta sea correcta
import { GlobalService } from './services/global.service'; // Asegúrate de que la ruta sea correcta
import { ScriptService } from './services/script.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { VerticalNavComponent } from './components/ui/vertical-nav/vertical-nav.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxSpinnerModule,
    CommonModule, 
    RouterOutlet,
    VerticalNavComponent,
    AdminHomeComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    CartComponent,
    AboutComponent,
    CheckoutComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop';
  layoutStyle: string = "default";
  deviceInfo: any = null
  constructor(
    private deviceService: DeviceDetectorService,
    public script: ScriptService,
    public virtualRouter: virtualRouter,
    public global: GlobalService
    ) {


    this.script.load(
      'popper',
      'jquery',
      'bootstrap',
      'slick', 
      'app'
    )
      .then(() => {
        // console.log('Todos los scripts se cargaron correctamente');
      })
      .catch(error => console.log(error));
      this.global.getConfig();
      this.epicFunction();
      this.global.isLogin();

    }
    ngOnInit(): void {
      /* this.global.getConfig().subscribe(
        (data) => {
          this.global.configs = data;
           // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      );
      this.global.getEmployes().subscribe(
        (data) => {
          this.global.employes = data; // Asigna los registros obtenidos a la variable 'registros'
          // console.log(data); // respuesta
        },
        (error) => {
          console.error(error); // Manejo de errores si la solicitud falla
        }
      ); */
    }
    toggleLayoutStyle() {
      if (this.layoutStyle === "default") {
        this.layoutStyle = "collapsed";
      } else {
        this.layoutStyle = "default";
      }
    }
    epicFunction() {
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      if (isMobile) {
        this.global.device = "Mobile";
        // console.log("Mobile");
      };
      if (isTablet) {
        this.global.device = "Tablet";
      };
      if (isDesktopDevice) {
        this.global.device = "Desktop";
        // console.log("Desktop");
      };
  
    }
}
