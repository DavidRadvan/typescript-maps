export interface Mappable {
  markerContent(): string
  location: {
    lat: number,
    lng: number
  }
  color: string
}

export class CustomMap {
  private googlemap: google.maps.Map;

  constructor(id: string) {
    this.googlemap = new google.maps.Map(document.getElementById(id)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {

    const custommarker = new google.maps.Marker({
      map: this.googlemap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    custommarker.addListener('click', () => {
      const InfoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      InfoWindow.open(this.googlemap, custommarker);
    })

  }
}