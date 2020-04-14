import { Component } from '@angular/core';
import GeoTIFF from 'geotiff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GeoTIFF Angular Demo';
  pool = new GeoTIFF.Pool();
}
