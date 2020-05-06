import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { MapsAPILoader, MouseEvent } from '@agm/core';
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
  constructor(private ngZone: NgZone, private geolocation: Geolocation, platform: Platform) { }

  ionViewDidLoad() {
    this.loadMap();
  }
  loadMap() {
    this.platform.ready().then(() => {

      // set options..
      const options = {
        timeout: 2000
      };
      this.geolocation.getCurrentPosition(() => {} , null, options).then((position) => {

      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      console.log('latLng', this.latLng);

      this.mapOptions = {
        center: this.latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    }, (err) => {
      alert('err ' + err);
    });
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
  createMarker(place) {
    this.placeLoc = place;
    console.log('placeLoc', this.placeLoc);
    this.markers = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
    });
    const infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }
}
