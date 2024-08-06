import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent implements OnInit{

  cidade: Cidade = new Cidade();

  constructor(
    private service: CidadeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
      this.cidade = this.service.getById(parseInt(id)) as Cidade;
    }  
  }

  onSubmit(){
    this.service.save(this.cidade);
    this.voltarParaListagem();
  }

  voltarParaListagem(){
    this.router.navigate(['/cidade-lista']);
  }

}
