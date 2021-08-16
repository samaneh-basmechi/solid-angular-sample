import {AfterContentInit, Component, ContentChild} from '@angular/core';
import {RELOAD_CONTENT} from './reload-content';
import {Reloadable} from './models/reloadable.model';

@Component({
    selector: 'app-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements AfterContentInit {
    @ContentChild(RELOAD_CONTENT)
    content?: Reloadable;

    ngAfterContentInit(): void {
        if (this.content) {
            this.content.reload();
        }
    }
}
