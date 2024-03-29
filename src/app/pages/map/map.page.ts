import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline } from 'leaflet';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs';
import { EorRimageGetService } from 'src/app/eor-rimage-get.service';
import { saveAs} from 'file-saver';

// import * as internal from 'stream';




@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: Leaflet.Map;
  marker: any;
  latlong = [];
  properties = [];
  status;
  fileName = 'testImage.png';


  ngOnInit() { }

  //   //arxikopoihsh gia ta keys tou sensor

  Type: String;
  // Status: internal;
  Longitude: DoubleRange;
  Latitude: DoubleRange;

  constructor(

    private geolocation: Geolocation,
    public http: HttpClient,
    private EorRi : EorRimageGetService
  ) { }

  ionViewDidEnter() {
    //   //o xartis xwris tipota topothesia kai zoom

    this.map = new Leaflet.Map('mapId').setView([38.290014, 21.787147], 15);
    Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v').addTo(this.map);

    var greenIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: [10, 21],
      iconAnchor: [10, 21],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    var yellowIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    var redIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });

    //normal timer
    // const source = timer(100, 60000);
    // const source2 = timer(60099,59999);

    let rem=0;
    // const subscribe = source.subscribe(val => this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {
    this.http.get("http://44.201.231.57/api/loadmap").subscribe(data => {
    // this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {
      
      var size = Object.keys(data).length;
      var ramps = [];
      var elevators = [];

      for (let i = 0; i < size; i++) {
        if (data[i].type == "r") {

          if (data[i].status == "green") { 
            let ramp1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp1.bindPopup("<img src=" + "http://44.201.231.57/api/image_issue?bug_id="+data[i].id+ ">");});
            // var ramp1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).on('click', function() {ramp1.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            ramps.push(ramp1);

          }
          else if (data[i].status == "yellow") {

            // let ramp2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp2.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            let ramp2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp2.bindPopup("<img src=" + "http://44.201.231.57/api/image_issue?bug_id="+data[i].id+ ">"); });


            ramps.push(ramp2);
          }
          else if (data[i].status == "red") {
            // let ramp3 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp3.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            let ramp3 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp3.bindPopup("<img src=" + "http://44.201.231.57/api/image_issue?bug_id="+data[i].id+ ">"); });
            ramps.push(ramp3);
            
          }
        }
        //type==e for elevators

        else if (data[i].type == "e") {
          
          if (data[i].status == "green") {
            // let elev1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev1.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            let elev1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev1.bindPopup("<img src=" + "http://44.201.231.57/api/image_issue?bug_id="+data[i].id+ ">"); });
            elevators.push(elev1);

          }
          else if (data[i].status == "yellow") {
            // let elev2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev2.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            let elev2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev2.bindPopup("<img src=" + "http://44.201.231.57/api/image_issue?bug_id="+data[i].id+ ">"); });
            elevators.push(elev2);
          }
          else if (data[i].status == "red") {
            // let elev3 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev3.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            let elev3 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev3.bindPopup("<img src=" + "http://44.201.231.57/api/image_issue?bug_id="+data[i].id+ ">"); });
            //+"<img src=" + "/assets/images/logo5.png"+ "/>"
            elevators.push(elev3);
          }
        }
        

      }
      console.log(ramps)

      //step1
      var rampes = Leaflet.layerGroup(ramps);
      var elevs = Leaflet.layerGroup(elevators);

      
      //step2
      var overlays = {
        "Ramps": rampes,
        "Elevators": elevs
      };

      //step3 with also adding to the map
      var legendControl = Leaflet.control.layers(0, overlays);
      legendControl.addTo(this.map);

      rem =1;
      // legendControl.remove();
      // Leaflet.control._update();
      
    })
    
    //uncomment this for timer
    // )
    
  }


  returnBlob(res) : Blob {
    return new Blob([res], {type: 'image/png'});
  }


}



