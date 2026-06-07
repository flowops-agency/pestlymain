"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** Pfad zur MP4-Datei (relativ zu /public), z.B. "/videos/pestly-demo.mp4" */
  src: string;
  /** Pfad zum Poster-Bild (Thumbnail), z.B. "/videos/pestly-thumbnail.jpg" */
  poster?: string;
  /** Titel für Barrierefreiheit */
  title?: string;
  /** Zusätzliche CSS-Klassen */
  className?: string;
}

export default function VideoEmbed({
  src,
  poster,
  title = "Video",
  className = "",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    setPlaying(true);
    // Kurzes Timeout, damit React den State-Updates-Render abwartet
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        setError(true);
      });
    });
  }

  function handleError() {
    setError(true);
  }

  // --- Error State ---
  if (error) {
    return (
      <div
        className={`mx-auto max-w-[560px] aspect-video rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center ${className}`}
        role="alert"
      >
        <p className="text-sm text-[var(--color-muted)]">
          Video konnte nicht geladen werden.
        </p>
      </div>
    );
  }

  // --- Playing State ---
  if (playing) {
    return (
      <div
        className={`mx-auto max-w-[560px] aspect-video rounded-lg overflow-hidden bg-black shadow-md ${className}`}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
          onError={handleError}
          aria-label={title}
        >
          <p>
            Dein Browser unterstützt kein Video.{" "}
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Datei direkt herunterladen
            </a>
          </p>
        </video>
      </div>
    );
  }

  // --- Thumbnail / Default State ---
  return (
    <div
      className={`mx-auto max-w-[560px] aspect-video rounded-lg overflow-hidden relative group cursor-pointer bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${className}`}
    >
      {/* Poster / Thumbnail */}
      {poster ? (
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-dim)] to-[var(--color-primary)]">
          <Play
            size={48}
            className="text-white/40"
          />
        </div>
      )}

      {/* Overlay bei Hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

      {/* Play Button */}
      <button
        onClick={handlePlay}
        className="absolute inset-0 flex items-center justify-center"
        aria-label={`${title} abspielen`}
        type="button"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-orange)] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[var(--color-orange-glow)]">
          <Play
            size={28}
            className="text-black fill-black ml-0.5"
          />
        </div>
      </button>
    </div>
  );
}
