'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
export default function VideoPlayer() {
  const params = useParams()

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const [videoUrl, setVideoUrl] = useState('')
  const [movieTitle, setMovieTitle] = useState('')


   const loadProgress = async () => {
     try {
       const response = await fetch(
         `http://127.0.0.1:8000/api/streaming/get-progress/${params.id}/`,
       )

       const data = await response.json()

       if (videoRef.current && data.progress > 0) {
         videoRef.current.currentTime = data.progress
       }
     } catch (error) {
       console.log(error)
     }
   }

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/movies/stream/${params.id}/`,
        )
        const data = await res.json()
        setVideoUrl(`http://127.0.0.1:8000${data.video}`)
        setMovieTitle(data.title)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovie()
    loadProgress()
  }, [params])

  const togglePlay = () => {
    if (!videoRef.current) return

    if (!isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }
  const saveProgress=async(time:number)=>{
    console.log("SAVE PROGRESS RUNNING")
    try{
      await fetch(
        "http://127.0.0.1:8000/api/streaming/save-progress/",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json",
          },

          body:JSON.stringify({
            movie_id:"74f903aa-401f-4e37-ad11-0a7943d88f54",
            progress:time

          })
        }
      )
    }catch(error){
      console.log(error)
    }
  }


  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const current = videoRef.current.currentTime
    const total = videoRef.current.duration

    setCurrentTime(current)
    setDuration(total)
    saveProgress(current)

    setProgress((current / total) * 100)
  }

  const handleSeek = (e: any) => {
    if (!videoRef.current) return
    const value = e.target.value
    videoRef.current.currentTime = (value / 100) * duration
    setProgress(value)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return

    videoRef.current.requestFullscreen()
  }

  const formatTime = (time: number) => {
    if (!time) return '0:00'
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)

    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-white text-2xl mb-4">{movieTitle}</h1>
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full rounded-lg"
          onTimeUpdate={handleTimeUpdate}
        />
        <div className="bg-zinc-900 p-4 flex items-center gap-4">
          <button onClick={togglePlay} className="text-white">
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <span className="text-white">
            {formatTime(currentTime)}/{formatTime(duration)}
          </span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="flex-1"
          />
          <button onClick={handleFullscreen} className="text-white">
            Fullscreen
          </button>
        </div>
      </div>
    </div>
  )
}
