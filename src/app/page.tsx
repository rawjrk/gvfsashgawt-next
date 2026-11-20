"use client";

import { useEffect, useRef } from "react";

import { APPLE_TREE } from "@/constants/backgrounds";
import { HomePageContent } from "@/features/home";
import { assetUrl } from "@/lib/asset";
import { fetchBlob } from "@/lib/blob";
import { DatamoshedImage } from "@/lib/datamosh";

const ANIMATION_INTERVAL_MS = 90;

export default function Home() {
  const datamoshedImage = useRef(new DatamoshedImage());

  useEffect(() => {
    const di = datamoshedImage.current;

    const datamoshBackground = () => {
      const url = di.generateMoshedObjectUrl();
      document.body.style.background = `url("${url}")`;
    };

    const loadImageAsset = async () => {
      const appleTreeImageUrl = assetUrl(APPLE_TREE.COLOR.url);
      const imgBlob = await fetchBlob(appleTreeImageUrl);
      await di.loadFromBlob(imgBlob);

      di.setDatamoshRange(...APPLE_TREE.COLOR.range);
    };

    let interval: ReturnType<typeof setInterval>;

    loadImageAsset().then(() => {
      di.setDatamoshRange(345, 375);
      interval = setInterval(datamoshBackground, ANIMATION_INTERVAL_MS);
    });

    return () => {
      clearInterval(interval);
      di.dispose();
    };
  }, []);

  return <HomePageContent />;
}
