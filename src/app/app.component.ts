import { Component } from '@angular/core';
import GeoTiff from 'geotiff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'geotiff demo';
  pool = new GeoTiff.Pool();
}
