import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  private dados: any;

  constructor (private dadosService: DadosService) {}


  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      })
  }

  init(): void {
    
  }



}
