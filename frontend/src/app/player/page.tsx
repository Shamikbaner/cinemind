'use client'

import { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

export default function PlayerPage() {
  const playerRef = useRef(null)

  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const videoUrl =
    'https://res.cloudinary.com/dkwwtolks/video/upload/v1/media/videos/WIN_20260423_21_59_51_Pro_utlvuC1.mp4';

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-4">CineMind Player</h1>

      <div className="w-[80%]">
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="70vh"
          playing={playing}
          controls={false}
          onProgress={(state) => {
            setProgress(state.playedSeconds)
          }}
        />
      </div>

      <div className="flex gap-4 mt-5">
        <button
          onClick={() => setPlaying(!playing)}
          className="bg-red-600 px-5 py-2 rounded text-white"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>

      <p className="text-white mt-4">Watched: {Math.floor(progress)} sec</p>
    </div>
  )
}
