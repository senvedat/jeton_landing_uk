import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SectionFirstComponent } from './section-first/section-first.component';
import { SectionSecondComponent } from './section-second/section-second.component';
import { SectionThirdComponent } from './section-third/section-third.component';
import { SectionFourthComponent } from './section-fourth/section-fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionFirstComponent,
    SectionSecondComponent,
    SectionThirdComponent,
    SectionFourthComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
