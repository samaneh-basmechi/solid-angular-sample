import { Component } from '@angular/core';
import {WidgetBase} from '../../widget-base';
import {Reloadable} from '../../models/reloadable.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent extends WidgetBase implements Reloadable{
  loading: boolean;

  reload(): void {
  }


}
