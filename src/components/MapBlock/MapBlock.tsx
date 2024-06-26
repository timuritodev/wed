/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from "react";
import "./MapBlock.css";

declare global {
  interface Window {
    ymaps: any;
  }
}

export const MapBlock: FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    window.ymaps.ready(init);

    function init() {
      if (mapInstance.current) return;

      mapInstance.current = new window.ymaps.Map(mapContainer.current, {
        center: [55.852076, 52.459151],
        zoom: 10,
      });

      mapInstance.current.behaviors.disable('scrollZoom');
      
      const placemark = new window.ymaps.Placemark(
        [55.852076, 52.459151],
        {
          hintContent: "Место проведения мероприятия",
          balloonContent: "Травянка, 4, г. Набережные Челны",
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      );

      mapInstance.current.geoObjects.add(placemark);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapContainer} className="map" />;
};
