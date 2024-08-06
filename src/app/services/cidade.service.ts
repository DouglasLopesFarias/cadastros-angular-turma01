import { Injectable } from '@angular/core';
import { Cidade } from '../componentes/model/cidade';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidadeLista: Cidade[] = [];

  constructor(){

  }

  save(cidade: Cidade){
    this.getAll();
    if(cidade.id){
      const cidadeAlterar = this.cidadeLista.find((value) => cidade.id == value.id);
      if(cidadeAlterar != null){
        cidadeAlterar.id = cidade.id;
        cidadeAlterar.nome = cidade.nome;
        cidadeAlterar.uf = cidade.uf;        
      }
    }else{
      let prox = 1;
      if(this.cidadeLista.length > 0){
        prox = this.cidadeLista[this.cidadeLista.length-1].id + 1;
      }
      cidade.id = prox;
      this.cidadeLista.push(cidade);
    }
    window.localStorage.setItem('cidadeLista', JSON.stringify(this.cidadeLista));
  }

  getAll(){
    const list = window.localStorage.getItem('cidadeLista');
    if(list){
      this.cidadeLista = JSON.parse(list);
    }
    return this.cidadeLista;
  }

  excluir(cidade: Cidade){    
    const index = this.cidadeLista.findIndex((value) => cidade.id == value.id);
    if(index >= 0){
      this.cidadeLista.splice(index, 1);
      window.localStorage.setItem('cidadeLista', JSON.stringify(this.cidadeLista));
    }
  }

  getById(id: number){
    this.getAll();
    const cidade = this.cidadeLista.find((value) => value.id == id);
    return cidade;
  }




}
