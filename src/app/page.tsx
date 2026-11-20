"use client";

import { useEffect, useRef } from "react";

import { APPLE_TREE } from "@/constants/backgrounds";
import { HomePageContent } from "@/features/home";
import { assetUrl } from "@/lib/asset";
import { DatamoshedImage } from "@/lib/datamosh";

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
      const appleTreeImageUrl = assetUrl(APPLE_TREE.COLOR.url);
      await di.fetchImage(appleTreeImageUrl);

      di.setDatamoshRange(...APPLE_TREE.COLOR.range);
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
