import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(100%)'
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('150ms ease-in-out'))
    ])
  ]
})
export class HomePage {

  animationState = 'in'; 

  usuarioRecibido: string = "";
  passwordRecibida: string = "";

  nombre: string = "";
  apellido: string = "";
  selectedOption: string = "";
  selectedDate: Date = new Date();

  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibida = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];
      }
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  mostrarDatos() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error', 'Nombre o apellido vacío');
    } else {
      const fechaFormateada = this.formatDate(this.selectedDate);
      this.presentAlert('Correcto', 'Su nombre es: ' + this.nombre + ' ' + this.apellido + ' y su fecha de nacimiento es: ' + fechaFormateada);
    }
  }
  
  formatDate(date: Date): string {
    if (date instanceof Date && !isNaN(date.getTime())) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return '';
    }
  }
  
  limpiarDatos() {
    this.nombre = '';
    this.apellido = '';
    this.selectedOption = '';
    this.selectedDate = null as any;
    this.animationState = 'out'; 

    setTimeout(() => {
      this.animationState = 'in';
    }, 500); 
  }

}
