"use client";

import { useEffect, useRef } from "react";

import { HomePageContent } from "@/features/home";
import { DatamoshedImage } from "@/utils/datamosh";

const ANIMATION_INTERVAL_MS = 90;

export default function Home() {
  const datamoshedImage = useRef(new DatamoshedImage());

  useEffect(() => {
    const di = datamoshedImage.current;

    const datamoshBackground = () => {
      const content = di.generateMoshedBase64();
      const imageData = `url("data:image/jpeg;base64,${content}")`;
      document.body.style.background = imageData;
    };

    const loadImageAsset = async () => {
      const appleTreeImageUrl = `${window.location.origin}/apple-tree/color.jpg`;
      await di.fetchImage(appleTreeImageUrl);
    };

    let interval: ReturnType<typeof setInterval>;

    loadImageAsset().then(() => {
      di.setDatamoshRange(345, 375);
      interval = setInterval(datamoshBackground, ANIMATION_INTERVAL_MS);
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <HomePageContent />;
}
