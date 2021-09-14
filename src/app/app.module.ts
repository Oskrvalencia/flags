import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './components/root/app.component';
import { FlagsListComponent } from './pages/flags-list/flags-list.component';
import { FlagsDetailComponent } from './pages/flags-detail/flags-detail.component';
import { FilterFlagsPipe } from './pipes/filter-flags.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectListFlagsPipe } from './pipes/select-list-flags.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FlagsListComponent,
    FlagsDetailComponent,
    FilterFlagsPipe,
    SelectListFlagsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
