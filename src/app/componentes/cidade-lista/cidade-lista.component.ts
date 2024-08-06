import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../../services/cidade.service';
import { Cidade } from '../model/cidade';

@Component({
  selector: 'app-cidade-lista',
  templateUrl: './cidade-lista.component.html',
  styleUrl: './cidade-lista.component.css'
})
export class CidadeListaComponent implements OnInit{

  constructor(private service: CidadeService){

  }

  cidadeLista: Cidade[] = [];
  cidadeSelecionada: Cidade = new Cidade();

  ngOnInit(): void {
    this.cidadeLista = this.service.getAll();
  }

  selecionaCidade(cidade: Cidade){
    this.cidadeSelecionada = cidade;
  }

  excluir(){
    this.service.excluir(this.cidadeSelecionada);
  }

}
