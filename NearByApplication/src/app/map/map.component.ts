import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import { defaults as defaultInteractions, Interaction } from 'ol/interaction';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() coordinatesChanged = new EventEmitter<[number, number]>();
  markerSource = new VectorSource();
  markerLayer = new VectorLayer({
    source: this.markerSource,
    style: new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({ color: 'red' }),
        stroke: new Stroke({ color: 'white', width: 2 })
      })
    })
  });

  ngOnInit(): void {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.markerLayer
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
      })
    });

    const clickInteraction = new Interaction({
      handleEvent: (evt) => {
        if (evt.type === 'singleclick') {
          const coordinates = map.getEventCoordinate(evt.originalEvent);
          this.addMarker([coordinates[0], coordinates[1]]);
        }
        return true;
      }
    });

    map.addInteraction(clickInteraction);
  }

  currentMarker: Feature | null = null;

  addMarker(coordinates: [number, number]) {
    if (this.currentMarker) {
      this.markerSource.removeFeature(this.currentMarker);
    }
    const marker = new Feature({
      geometry: new Point(coordinates)
    });

    this.markerSource.addFeature(marker);

    this.currentMarker = marker;

    const lonLat = toLonLat(coordinates);
    const [longitude, latitude] = lonLat;
    this.coordinatesChanged.emit([longitude,latitude]);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
}
