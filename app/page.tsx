"use client"

import { BackgroundVideo } from "@/components/background-video"
import { FloatingHearts } from "@/components/floating-hearts"
import { CursorTrail } from "@/components/cursor-trail"
import { MusicPlayer } from "@/components/music-player"
import { ProfileSection } from "@/components/profile-section"
import { PhotoSlideshow } from "@/components/photo-slideshow"
import type { Slide } from "@/components/photo-slideshow"
import { SocialLinks } from "@/components/social-links"
import { CountdownTimer } from "@/components/countdown-timer"

// ---------------------------------------------------------------
//  CUSTOMIZE EVERYTHING BELOW TO MAKE IT YOURS
// ---------------------------------------------------------------

// Your name and love message
const PROFILE = {
  name: "Araya",
  message: "I love you so much thanks for everything you do for me you are my dream and my reality happy valentine baby",
  // Add your avatar image URL here (or leave empty for the heart icon)
  avatarUrl: "",
}

// Background video URL - paste any direct video URL (.mp4)
// Example: "https://cdn.pixabay.com/video/2024/02/01/198889-908819958_large.mp4"
const BACKGROUND_VIDEO_URL = "https://cdn.pixabay.com/video/2020/02/07/32085-390602975_large.mp4"

// Background music URL - paste any direct audio URL (.mp3)
// Example: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
const BACKGROUND_MUSIC_URL = "https://www.dropbox.com/scl/fi/7w55cicq9opx4oaikh86c/teo-glacier-if-this-ain-t-love-Official-Lyric-Video.mp3?rlkey=p87mg66v6ut05i9wb5otn9jou&st=g0ym9ht1&dl=1"
const SONG_TITLE = "If This Ain't Love"
const SONG_ARTIST = "Teo Glacier"

// Your slideshow photos - add as many as you want!
// Replace the URLs with your own photos and captions
const SLIDESHOW_PHOTOS: Slide[] = [
  {
    imageUrl: "/images/Adobe Express - file.png",
    caption: "My favorite place is right here.",
  },
  {
    imageUrl: "/images/Adobe Express - file.jpg",
    caption: "you are so beautiful my baby",
  },
  {
    imageUrl: "/images/IMG_4161 (1).jpg",
    caption: "Even when we lose I still win with you.",
  },
  {
    imageUrl: "/images/IMG_4206 (1).png",
    caption: "My forever.",
  },
]

// Links section - like guns.lol social links
const SOCIAL_LINKS = [
  { label: "Our Playlist", url: "https://open.spotify.com/playlist/5cCBfrPbCUiipnPu2cWlCJ?si=DJttUDtVQN6IZ8EUabrsHg&pi=RuEe07cmQY-Zo", icon: "music" as const },
  { label: "Love Letters", url: "/love-letter", icon: "message" as const },
  { label: "Our Bucket List", url: "/bucket-list", icon: "star" as const },
  { label: "Special Message", url: "/special-message", icon: "heart" as const },
]

// ---------------------------------------------------------------
//  END OF CUSTOMIZATION - everything below handles the layout
// ---------------------------------------------------------------

export default function ValentinePage() {
  return (
    <main className="relative min-h-screen scanlines">
      {/* Background layers */}
      <BackgroundVideo videoUrl={BACKGROUND_VIDEO_URL} />
      <FloatingHearts />
      <CursorTrail />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center px-4 py-12 gap-8 max-w-lg mx-auto min-h-screen">
        {/* Top badge - guns.lol style */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border backdrop-blur-sm text-xs text-muted-foreground font-mono">
          <span className="w-1.5 h-1.5 rounded-full  bg-primary animate-pulse" />
          valentine&apos;s day
        </div>

        {/* Profile */}
        <ProfileSection
          name={PROFILE.name}
          message={PROFILE.message}
          avatarUrl={PROFILE.avatarUrl || undefined}
        />

        {/* Countdown */}
        <CountdownTimer />

        {/* Slideshow */}
        <PhotoSlideshow slides={SLIDESHOW_PHOTOS} />

        {/* Divider */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-border" />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Social links */}
        <SocialLinks links={SOCIAL_LINKS} />

        {/* Footer */}
        <footer className="mt-auto pt-8 pb-20 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            made with{" "}
            <span className="text-primary neon-text-subtle">love</span>
            {" "}for you
          </p>
          <p className="text-[10px] text-muted-foreground/50 mt-1 font-mono">
            happy valentine&apos;s day 2026
          </p>
        </footer>
      </div>

      {/* Music player */}
      <MusicPlayer
        audioUrl={BACKGROUND_MUSIC_URL}
        songTitle={SONG_TITLE}
        artist={SONG_ARTIST}
      />
    </main>
  )
}
