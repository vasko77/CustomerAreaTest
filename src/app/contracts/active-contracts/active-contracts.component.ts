import { Component, OnInit } from '@angular/core';
import { ContractsDataService } from '../services/contracts-data.service';
import { Contract } from '../models/contract';

@Component({
  selector: 'app-active-contracts',
  templateUrl: './active-contracts.component.html',
  styleUrls: ['./active-contracts.component.scss']
})
export class ActiveContractsComponent implements OnInit {

  contracts: Contract[];

  constructor(private contractDataService: ContractsDataService) { }

  ngOnInit() {
  }

  getContracts(): void {
    this.contractDataService.getActiveContracts().subscribe(
      resp => {
        this.contracts = resp;
        console.log( this.contracts );
      }
    );
  }

}
