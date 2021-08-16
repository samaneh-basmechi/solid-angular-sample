import { Component } from '@angular/core';
import {WidgetBase} from '../../widget-base';
import {Identifiable} from '../../models/identifiable.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent extends WidgetBase implements Identifiable{
  id: string;

}
