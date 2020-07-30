import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {PostService} from '../post.service';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details-posts',
  templateUrl: './details-posts.component.html',
  styleUrls: ['./details-posts.component.scss']
})
export class DetailsPostsComponent implements OnInit {
  @Input() post:PostI;
  public post$: Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc :PostService) { }

  ngOnInit(): void {
    const idPost  = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
    }

    editPost(post:PostI){
        this.postSvc.editPostById(post);
        this.initValuesForm();
    }
    public editPostForm = new FormGroup({
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
    })
    private initValuesForm():void{
      this.editPostForm.patchValue({
        id: this.post.id,
        nombre: this.post.nombre,
        codigoU: this.post.codigoU,
        facultad: this.post.facultad,
        escuelaP: this.post.escuelaP,
        filial: this.post.filial,
        fecha: this.post.fecha,
        estado: this.post.estado,
        ciclo: this.post.ciclo,
        eNombre:this.post.eNombre,
        etipo: this.post.eTipo,
        edireccion: this.post.eDireccion,
        etelefono: this.post.eTelefono,
        egerente: this.post.eGerente,
        eEmail: this.post.eEmail 
      })
    }
  

}
