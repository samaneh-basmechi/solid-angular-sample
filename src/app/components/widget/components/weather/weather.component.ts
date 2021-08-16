import {Component} from '@angular/core';
import {WidgetBase} from '../../widget-base';
import {RELOAD_CONTENT} from '../../reload-content';
import {Identifiable} from '../../models/identifiable.model';
import {Reloadable} from '../../models/reloadable.model';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    providers: [
        {provide: RELOAD_CONTENT, useExisting: WeatherComponent}
    ]
})
export class WeatherComponent extends WidgetBase implements Identifiable, Reloadable {
    id: string;
    loading: boolean;

    reload(): void {
        console.log('...WeatherComponent');
    }


}
