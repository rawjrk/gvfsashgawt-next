"use client";

import { useEffect, useRef } from "react";

import { APPLE_TREE } from "@/constants/backgrounds";
import { NotFoundPageContent } from "@/features/not-found";
import { assetUrl } from "@/lib/asset";
import { DatamoshedImage } from "@/lib/datamosh";

export default function NotFound() {
  const datamoshedImage = useRef(new DatamoshedImage());

  useEffect(() => {
    const di = datamoshedImage.current;

    const datamoshBackground = () => {
      const url = di.generateMoshedObjectUrl();
      document.body.style.background = `url("${url}")`;
    };

    const loadImageAsset = async () => {
      const appleTreeImageUrl = assetUrl(APPLE_TREE.COLOR.url);
      await di.fetchImage(appleTreeImageUrl);
    };

    loadImageAsset().then(() => {
      di.setDatamoshRange(...APPLE_TREE.COLOR.range);
      datamoshBackground();
    });

    window.addEventListener("click", datamoshBackground);
    window.addEventListener("keypress", datamoshBackground);

    return () => {
      window.removeEventListener("click", datamoshBackground);
      window.removeEventListener("keypress", datamoshBackground);
      di.dispose();
    };
  }, []);

  return <NotFoundPageContent />;
}
