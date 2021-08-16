import {Component} from '@angular/core';
import {JsonExporterService} from './services/json-exporter.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor(private jsonExporterService: JsonExporterService) {
    }


    onExportJson(): void {
        this.jsonExporterService.export();
    }
}
