import { Component, OnInit, Input } from '@angular/core';
import { IContract } from '../models/contract';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.scss']
})
export class ContractInfoComponent implements OnInit {

  @Input() contract: IContract;

  constructor() { }

  ngOnInit() {
  }

}
