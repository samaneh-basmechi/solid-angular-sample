import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonExporterService {

  constructor() { }


  export(): void {
    const data = JSON.stringify({weather: {isSunny: true, temp: +25}});
    const dataUri = 'data:application/json:charset=utf-8,' + encodeURIComponent(data);
    const exportFileName = 'weather.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('downLoad', exportFileName);
    linkElement.click();
  }
}
