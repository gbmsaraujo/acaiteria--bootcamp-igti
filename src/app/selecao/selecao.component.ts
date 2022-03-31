import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css'],
})
export class SelecaoComponent {
  @Input() titulo: string = '';

  @Input() opcoes: string[] = [''];

  @Input() escolhaAte: number = 0;

  @Input() tipoInput: string = '';

  count: number = 0;

  checkada: boolean = false;

  opcoesSelecionadas: string[] = [];

  marcaOuDesmarcaOpcao(opcao: string) {
    if (this.escolhaAte === 1) {
      this.opcoesSelecionadas = [opcao];
    } else {
      let index = this.opcoesSelecionadas.indexOf(opcao);
      if (index === -1) {
        this.opcoesSelecionadas.push(opcao);
      } else {
        this.opcoesSelecionadas.splice(index, 1);
      }
    }
  }

  opcaoSelecionada(opcao: string): boolean {
    return this.opcoesSelecionadas.indexOf(opcao) != -1;
  }
}
