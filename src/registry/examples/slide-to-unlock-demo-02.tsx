"use client";

import { toast } from "sonner";

import { ShimmeringText } from "@/registry/shimmering-text";
import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/registry/slide-to-unlock";

export default function SlideToUnlockDemo2() {
  return (
    <>
      <SlideToUnlock
        className="bg-gradient-to-b from-zinc-800 to-zinc-900"
        onUnlock={() => {
          const myPromise = new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 1000);
          });

          toast.promise(myPromise, {
            loading: "Connecting...",
            success: () => `Connected`,
            error: ({ message }) => `Error: ${message}`,
          });
        }}
      >
        <SlideToUnlockTrack>
          <SlideToUnlockText>
            {({ isDragging }) => (
              <ShimmeringText
                className="[--color:var(--color-zinc-600)] [--shimmering-color:var(--color-zinc-50)]"
                text="slide to answer"
                isStopped={isDragging}
              />
            )}
          </SlideToUnlockText>

          <SlideToUnlockHandle className="bg-gradient-to-b from-emerald-500 to-emerald-700 text-white" />
        </SlideToUnlockTrack>
      </SlideToUnlock>
    </>
  );
}
