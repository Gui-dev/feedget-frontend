import React from 'react'
import { CircleNotch } from 'phosphor-react'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-6 w-6 overflow-hidden">
      <CircleNotch weight="bold" className="h-4 w-4 animate-spin"/>
    </div>
  )
}
