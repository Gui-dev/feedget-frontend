import React from 'react'

import { CloseButton } from '../../CloseButton'
import successImage from './../../../assets/success.png'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export const FeedbackSuccessStep = ({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="imagem de um quadrado com um v no meio" />
        <h1 className="text-xl mt-2">Agradecemos o feedback!</h1>

        <button className="text-sm leading-6 py-2 px-6 mt-6 bg-zinc-800 rounded-md
            border-transparenthover:bg-zinc-700
            focus:outiline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
            focus:ring-brand-500 transition-colors
          "
          onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
