import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
  providers: [MessageService]
})
export class ImportComponent implements OnInit {

  ngOnInit(): void {

  }

}
