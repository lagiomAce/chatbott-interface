import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje:string="";
  usuario:any='cliente';

  




  mensajes:any=[
    {
      emisor:this.usuario,
      texto:"Hola que tal"
    },
    {
      emisor:"id",
      texto:"bien y tu"
    },
    {
      emisor:this.usuario,
      texto:"igualmente"
    },
    {
      emisor:"id",
      texto:"que bueno"
    },
    {
      emisor:this.usuario,
      texto:"si"
    }
  ]
  enviarMensaje(){
    console.log(this.nuevoMensaje);
    let mensaje={
      emisor:this.usuario,
      texto:this.nuevoMensaje
      
    }
    this.mensajes.push(mensaje)
    this.nuevoMensaje="";
    setTimeout(() => {
      this.scrollAutomatico();
    }, 10);
  }

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.usuario
  }
  scrollAutomatico(){
     let elements=document.getElementsByClassName('msj');
     let ultimo:any=elements[(elements.length-1)];
     let toppos=ultimo.offsetTop;
     
     //@ts-ignore
     document.getElementById('contenedorDeMensajes')?.scrollTop=toppos;
  }

}
