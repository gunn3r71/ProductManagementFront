import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'providerType'
})
export class ProviderTypePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return (value === 'PessoaFisica')? 'Pessoa física' : 'Pessoa jurídica';
  }

}
