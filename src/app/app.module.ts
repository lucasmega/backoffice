import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatSortModule,
    MatRadioModule,
    MatTableModule,
    MatInputModule,
    MatBadgeModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatDialogModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatStepperModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule { }
