import {InjectionToken} from '@angular/core';
import {Reloadable} from './models/reloadable.model';

export const RELOAD_CONTENT = new InjectionToken<Reloadable>('reloadable_content');
