import React from 'react'
import Link, { LinkProps } from 'next/link'

import { MainLayout } from '@/components/layouts'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <MainLayout>
      <SiteHeader>Next.js + TypeScript + Tailwind CSS</SiteHeader>
      <nav>
        <ul className='divide-y'>
          <li className='p-2'>
            <NavLnk href='/layouts/kevin-powell/1'>Layout 2 + 1</NavLnk>
          </li>
        </ul>
      </nav>
    </MainLayout>
  )
}

interface NavLinkProps extends LinkProps {
  children: React.ReactNode
}

function NavLnk({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className='underline-offset-4 hover:underline'
    >
      {children}
    </Link>
  )
}
