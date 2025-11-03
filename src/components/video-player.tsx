
'use client';
import { X } from 'lucide-react';

type VideoPlayerProps = {
  videoUrl: string;
  'on-close': () => void;
};

export function VideoPlayer({ videoUrl, 'on-close': onClose }: VideoPlayerProps) {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 bg-white rounded-full p-1 text-black hover:bg-gray-200 transition-all"
          aria-label="Close video player"
        >
          <X className="h-6 w-6" />
        </button>
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
