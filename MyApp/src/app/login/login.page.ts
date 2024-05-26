import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  usuario: string = "";
  password: string = "";
  constructor(private alertControler:AlertController, private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log('Intentando iniciar sesión...');
    if (this.usuario.trim() == 'alberto' && this.password.trim() == '1234') {
      this.presentAlert('Correcto','Formulario enviado con éxito');
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }
      };
      console.log('Navegando al HomePage...');
      this.router.navigate(['/home'], navigationExtras);
    } else if (this.usuario.trim().length > 8 || this.usuario.trim().length < 3) {
      this.presentAlert('Error', 'El nombre de usuario no debe ser mayor a 8 caracteres ni menor a 3');
    } else if (this.password.trim().length > 4) {
      this.presentAlert('Error', 'La contraseña no debe ser mayor a 4 caracteres');
    } else {
      this.presentAlert('Error', 'Usuario o contraseña incorrectos');
    }
  }
  

  async presentAlert(header: string, mesagge: string){
    const alert = await this.alertControler.create({
      header: header,
      message: mesagge,
      buttons: ['Aceptar']
    });
    await alert.present();
}}

