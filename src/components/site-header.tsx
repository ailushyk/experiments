import React from 'react'

export const SiteHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="px-4 py-6">
      <h1 className="text-2xl font-bold">{children}</h1>
    </header>
  )
}
