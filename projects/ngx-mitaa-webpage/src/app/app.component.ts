import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Continent, NgxMitaaService } from 'ngx-mitaa';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AppComponent implements OnInit {
  private mitaaService = inject(NgxMitaaService);

  ngOnInit() {
    const locations: Continent[] = this.mitaaService.getLocations();
    console.log(locations);
    const continents = this.mitaaService.getContinents();
    console.log(continents);
    const countries = this.mitaaService.getCountries();
    console.log(countries);
    const regions = this.mitaaService.getRegions();
    console.log(regions);
    const districts = this.mitaaService.getDistricts();
    console.log(districts);
    const wards = this.mitaaService.getWards();
    console.log(wards);
    const streets = this.mitaaService.getStreets();
    console.log(streets);
  }
}
