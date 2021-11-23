import { Component, OnInit } from '@angular/core';
import {ProvidersService} from "../services/providers.service";
import {Fornecedor} from "../models/provider.model";

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  public providers: Fornecedor[];
  constructor(private service: ProvidersService) { }

  ngOnInit(): void {
    this.service.getProviders()
      .subscribe((providers ) => {
        this.providers = providers;
        console.log(providers)
      },
        (error) => console.log(error)
      );
  }
}
