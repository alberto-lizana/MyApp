import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core'; // Asegúrate de importar esto si estás usando matDatepicker
import { MatIconModule } from '@angular/material/icon'; // Importa si estás usando mat-datepicker-toggle
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule, // Asegúrate de añadir esto si estás usando matDatepicker
    MatIconModule // Añade si estás usando mat-datepicker-toggle
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
