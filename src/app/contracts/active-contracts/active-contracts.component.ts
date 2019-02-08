import { Component, OnInit } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { ContractsDataService } from '../services/contracts-data.service';
import { IContract } from '../models/contract';

@Component({
  selector: 'app-active-contracts',
  templateUrl: './active-contracts.component.html',
  styleUrls: ['./active-contracts.component.scss']
})
export class ActiveContractsComponent implements OnInit {

  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Ανάκτηση δεδομένων',
    spinnerSize: 20,
    raised: true,
    stroked: true,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };

  isLoading = false;
  contracts: IContract[];

  constructor(private contractDataService: ContractsDataService) { }

  ngOnInit() {
  }

  getContracts(): void {
    this.btnOpts.active = true;
    this.contractDataService.getActiveContracts().subscribe(
      resp => {
        this.contracts = resp.Contracts;
        this.btnOpts.active = false;
        console.log(this.contracts);
      },
      error => {
        this.btnOpts.active = false;
        // console.error( error );
      }
    );
  }

}
