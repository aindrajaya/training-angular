import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, PhonePipe } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroParentComponent,
    HeroChildComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }