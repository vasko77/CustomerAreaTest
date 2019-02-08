import { Component, OnInit } from '@angular/core';
import { ContractsDataService } from '../services/contracts-data.service';
import { IContract } from '../models/contract';

@Component({
  selector: 'app-active-contracts',
  templateUrl: './active-contracts.component.html',
  styleUrls: ['./active-contracts.component.scss']
})
export class ActiveContractsComponent implements OnInit {

  contracts: IContract[];

  constructor(private contractDataService: ContractsDataService) { }

  ngOnInit() {
  }

  getContracts(): void {
    this.contractDataService.getActiveContracts().subscribe(
      resp => {
        this.contracts = resp.Contracts;
        console.log( this.contracts );
      }
    );
  }

}
