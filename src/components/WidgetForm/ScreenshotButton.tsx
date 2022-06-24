import React, { useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { Loading } from '../Loading'

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export const ScreenshotButton = ({ screenshot, onScreenshotTook }: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onScreenshotTook(base64Image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="flex items-end justify-end text-zinc-400 p-1 h-10 w-10
          rounded-md border-transparent hover:bg-zinc-100 transition-colors
        "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom', // remover depois de finalizado
          backgroundSize: 180 // remover depois de finalizado
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700
        focus:outiline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
      focus:ring-brand-500 transition-colors
      "
      onClick={handleTakeScreenshot}
    >
      { isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6"/>}
    </button>
  )
}
