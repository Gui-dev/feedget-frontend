import React, { useState } from 'react'
import { ArrowLeft } from 'phosphor-react'

import { CloseButton } from '../../CloseButton'
import { FeedbackType, feedbackTypes } from '..'
import { ScreenshotButton } from '../ScreenshotButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export const FeedbackContentStep = ({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const feedBackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <header>
        <button
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="h-4 w-4"/>
        </button>
        <h1 className="flex items-center gap-2 text-xl leading-6">
          <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} />
          {feedBackTypeInfo.title}
        </h1>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="text-sm text-zinc-100 min-h-[112px] min-w[304px] w-full
            border-zinc-600 bg-transparent rounded-md placeholder-zinc-400
            focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none
            scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin
          "
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="flex flex-1 items-center justify-center text-sm p-2
              bg-brand-500 rounded-md border-transparent hover:bg-brand-300
              focus:outiline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
              focus:ring-brand-500 transition-colors
            "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}