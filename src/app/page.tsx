"use client";

import { useEffect, useRef } from "react";

import { HomePageContent } from "@/features/home";
import { assetUrl } from "@/lib/asset";
import { DatamoshedImage } from "@/lib/datamosh";

const ANIMATION_INTERVAL_MS = 90;

export default function Home() {
  const datamoshedImage = useRef(new DatamoshedImage());

  useEffect(() => {
    const di = datamoshedImage.current;
    let requestID: number;
    let lastFrameTime = 0;
    let isMounted = true;

    const animate: FrameRequestCallback = (currentTime) => {
      if (!isMounted) return;

      requestID = requestAnimationFrame(animate);

      if (currentTime - lastFrameTime >= ANIMATION_INTERVAL_MS) {
        lastFrameTime = currentTime;
        const content = di.generateMoshedBase64();
        document.body.style.backgroundImage = `url("data:image/jpeg;base64,${content}")`;
      }
    };

    const loadImageAsset = async () => {
      const appleTreeImageUrl = assetUrl("/apple-tree/color.jpg");
      await di.fetchImage(appleTreeImageUrl);

      di.setDatamoshRange(345, 375);

      if (!isMounted) return;

      requestID = requestAnimationFrame(animate);
    };

    loadImageAsset();

    return () => {
      isMounted = false;
      cancelAnimationFrame(requestID);
    };
  }, []);

  return <HomePageContent />;
}
