import React from 'react'

import { CloseButton } from '../../CloseButton'
import { feedbackTypes, FeedbackType } from './../'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <h1 className="text-xl leading-6">Deixe seu feedback</h1>
        <CloseButton />
      </header>
      <div className="flex gap-2 w-full py-8">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="flex flex-1 flex-col items-center gap-2 bg-zinc-800 rounded py-5 w-24 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>
    </>
  )
}
