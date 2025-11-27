"use client";

import { useEffect, useRef } from "react";

import { NotFoundPageContent } from "@/modules/not_found.tsx";
import { DatamoshedImage } from "@/utils/datamosh";

export default function NotFound() {
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

    loadImageAsset().then(() => {
      di.setDatamoshRange(345, 375);
      datamoshBackground();
    });

    window.addEventListener("click", datamoshBackground);
    window.addEventListener("keypress", datamoshBackground);

    return () => {
      window.removeEventListener("click", datamoshBackground);
      window.removeEventListener("keypress", datamoshBackground);
    };
  }, []);

  return <NotFoundPageContent />;
}
