import {Endereco } from "./address.model";

export class Fornecedor {
  nome: string;
  documento: string;
  tipoFornecedor: string;
  endereco: Endereco;
  ativo: boolean;
}
