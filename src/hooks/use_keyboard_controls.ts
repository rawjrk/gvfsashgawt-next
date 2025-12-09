"use client";

import { useEffect } from "react";

import { KeyCode } from "@/types/key_codes";
import { AsyncFn } from "@/types/utilities";

export type KeyboardEventHandler = AsyncFn<(event: KeyboardEvent) => void>;
export type KeyboardControls = Partial<Record<KeyCode, KeyboardEventHandler>>;

/**
 * @example
 * const controls = useRef<KeyboardControls>({
 *   [KeyCode.KeyF]: (event) => {
 *     // do something...
 *   },
 * }).current;
 * useKeyboardControls(controls); // registers and unregisters
 */
export const useKeyboardControls = (controls: KeyboardControls) => {
  useEffect(() => {
    const combinedHandler: KeyboardEventHandler = (event) => {
      Object.entries(controls).forEach(([keyCode, keyHandler]) => {
        if (event.code === keyCode) {
          void keyHandler(event);
        }
      });
    };

    window.addEventListener("keypress", combinedHandler);

    return () => {
      window.removeEventListener("keypress", combinedHandler);
    };
  }, [controls]);
};
