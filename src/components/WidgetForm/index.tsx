import React, { useState } from 'react'

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

import bugImageUrl from './../../assets/bug.png'
import ideaImageUrl from './../../assets/idea.png'
import thoughtImageUrl from './../../assets/thought.png'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada acesa'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  const handleRestartFeedback = () => {
    setFeedbackType(null)
  }

  return (
    <div
      className="flex flex-col items-center bg-zinc-900 p-4 relative rounded-2xl mb-4 shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >

      {!feedbackType
        ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          )
        : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
            />
          )
      }

      <footer className="text-xs text-neutral-400">
        Feito com 💜 carinho
      </footer>
    </div>
  )
}
