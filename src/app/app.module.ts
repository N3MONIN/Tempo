import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderPage } from "./header/header.page";
import { MenuPage } from "./menu/menu.page";

@NgModule({
  declarations: [
    AppComponent,
    HeaderPage,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
