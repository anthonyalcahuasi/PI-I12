import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {PostI} from '../../../shared/models/post.interface';
import {PostService} from '../post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  private image : any;
  constructor(private postSvc:PostService) { }

  public newPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    codigoU: new FormControl('', Validators.required),
    facultad: new FormControl('', Validators.required),
    escuelaP: new FormControl('', Validators.required),
    filial: new FormControl('', Validators.required),
    ciclo: new FormControl('', Validators.required),
    eNombre: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    eTipo: new FormControl('', Validators.required),
    eDireccion: new FormControl('', Validators.required),
    eTelefono: new FormControl('', Validators.required),
    eGerente: new FormControl('', Validators.required),
    eEmail: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  addNewPost(data: PostI){
    this.postSvc.preAddAndUpdatePost(data, this.image);
    Swal.fire(
      'Solicitud Enviada',
      'Te avisaremos cuando este revisado',
      'success'
    )
  }

  handleImage(event:any):void{
    this.image = event.target.files[0];
  }
}
