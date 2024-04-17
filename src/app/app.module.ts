import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.page";
import { MenuPage } from "./menu/menu.page";
import { HeaderService } from "./header/header.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuPage,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
