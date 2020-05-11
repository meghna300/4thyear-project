import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from '../Constants/routes';
import { Hospita } from '../hospita';


@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent implements OnInit {
  hospitals: any;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  autocomplete;
  URL = AppConstants.baseURL + '/api/nearby-hospitals';
  url(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone, private http: HttpClient) { }
  ngOnInit(): void {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line:new-parens
      this.geoCoder = new google.maps.Geocoder;

      this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      this.autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
         const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();

          // verify result
         if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
         this.latitude = place.geometry.location.lat();
         this.longitude = place.geometry.location.lng();
         this.zoom = 12;
         this.showNearbyHospitals();
        });
      });
    });
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  showNearbyHospitals() {
    const data = { 'latitude': this.latitude,
  'longitude': this.longitude};
    this.http.post(this.URL, data).subscribe(
    response => {
    console.log(response);
    this.hospitals = response;
    console.log(this.hospitals);
      }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
}
