'use client'

import { useEffect, useRef, useState } from 'react'


export default function VidoPlayer() {
  const videoUrl = 'http://127.0.0.1:8000/media/videos/harrypotter1.mp4'
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currenttime, setCurrentTime] = useState(0)
  const [showControls, setShowControls] = useState(true)

  //play pause
  const togglePlay = () => {
    if (!videoRef.current) return

    if (!isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  //update progress
  const handleTimeUpdate = () => {
    if (!videoRef.current) return

    const current = videoRef.current.currentTime
    const total = videoRef.current.duration

    setCurrentTime(current)
    setDuration(total)
    setProgress((current / total) * 100)
  }

  //seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return

    const seekTime = (Number(e.target.value) / 100) * duration
    videoRef.current.currentTime = seekTime
    setProgress(Number(e.target.value))
  }

  //fullscreen
  const handleFullscreen = () => {
    if (!videoRef.current) return

    videoRef.current.requestFullscreen()
  }

  //auto hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (showControls) {
      timeout = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
    return () => clearTimeout(timeout)
  }, [showControls])

  //format time
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)

    return `${mins}.${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div
      className="relative w-full bg-black"
      onMouseMove={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full"
        onTimeUpdate={handleTimeUpdate}
      />
      {showControls && (
        <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4">
          {/* Progress */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full"
          />
          <div className="flex items-center justify-between mt-2 text-white">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay}>
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <span>
                {formatTime(currenttime)}/{formatTime(duration)}
              </span>
            </div>
            <button onClick={handleFullscreen}>FullScreen</button>
          </div>
        </div>
      )}
    </div>
  )
}
