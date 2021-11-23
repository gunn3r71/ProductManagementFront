import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Fornecedor} from "../models/provider.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private readonly url: string = environment.apiUrl + 'Fornecedores';

  constructor(private client: HttpClient) { }

  getProviders(): Observable<Fornecedor[]> {
    return this.client.get<Fornecedor[]>(this.url);
  }
}
