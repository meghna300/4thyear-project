import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { googlemaps } from 'googlemaps';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.css']
})
export class NearbyComponent implements OnInit {
  platform: any;
  // tslint:disable-next-line:member-ordering
  @ViewChild('map') mapElement: ElementRef;
  // tslint:disable-next-line:member-ordering
  map: any;
  latLng: any;
  markers: any;
  mapOptions: any;
  isKM: any = 500;
  isType: any = '';
  service;
  placeLoc;
  ngOnInit(): void {
  }
  constructor(private ngZone: NgZone, private geolocation: Geolocation) { }

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
      this.geolocation.getCurrentPosition((position) => {

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone ) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      // tslint:disable-next-line:new-parens
      this.geoCoder = new google.maps.Geocoder;
      this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      this.autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          // tslint:disable-next-line:prefer-const
          let place: google.maps.places.PlaceResult = this.autocomplete.getPlace();

    }, (err) => {
      alert('err ' + err);
    });
  }
  /*--------------------Find Nearby Place------------------------*/
nearbyPlace() {
    this.loadMap();
    this.markers = [];
    this.service = new google.maps.places.PlacesService(this.map);
    this.service.nearbySearch({
      location: this.latLng,
      radius: this.isKM,
      types: [this.isType]
    }, (results, status) => {
      this.callback(results, status);
    });
  }
callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }
// tslint:disable-next-line:align
createMarker(place) {
    this.placeLoc = place;
    console.log('placeLoc', this.placeLoc);
    this.markers = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });
    const infowindow = new google.maps.InfoWindow();

    });
  }
}
