import React from 'react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const IMAGE_SIZE = 90

export function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-lg bg-zinc-900 p-3 ring-white ring-offset-2 ring-offset-black transition delay-100 hover:bg-zinc-800 hover:ring-1',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      className={cn(
        'rounded-full ring-2 ring-white ring-offset-2 ring-offset-black',
        className
      )}
    />
  )
}
