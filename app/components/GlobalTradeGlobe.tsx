"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const locations = [
  { name: "INDIA", lat: 20.5937, lng: 78.9629 },
  { name: "UAE", lat: 24.4539, lng: 54.3773 },
  { name: "EUROPE", lat: 50.1109, lng: 10.0183 },
  { name: "AFRICA", lat: 1.2921, lng: 36.8219 },
  { name: "ASIA", lat: 35.8617, lng: 104.1954 },
  { name: "AUSTRALIA", lat: -25.2744, lng: 133.7751 },
  { name: "AMERICAS", lat: 37.0902, lng: -95.7129 },
];

const routes = [
  {
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: 24.4539,
    endLng: 54.3773,
  },
  {
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: 50.1109,
    endLng: 10.0183,
  },
  {
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: 1.2921,
    endLng: 36.8219,
  },
  {
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: -25.2744,
    endLng: 133.7751,
  },
  {
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: 37.0902,
    endLng: -95.7129,
  },
];

export default function GlobalTradeGlobe() {
  const [size, setSize] = useState(520);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 600) {
        setSize(330);
      } else if (window.innerWidth < 1000) {
        setSize(430);
      } else {
        setSize(520);
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="global-trade-globe">
      <Globe
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        atmosphereColor="#7db7ff"
        atmosphereAltitude={0.18}
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#ffd36a"}
        pointRadius={0.45}
        pointAltitude={0.015}
        pointLabel={(d: any) => d.name}
        arcsData={routes}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor={() => ["#ffe09a", "#ffffff"]}
        arcDashLength={0.35}
        arcDashGap={0.15}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={2500}
        arcStroke={0.6}
      />
    </div>
  );
}