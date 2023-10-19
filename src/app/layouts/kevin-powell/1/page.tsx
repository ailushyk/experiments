import React from 'react'
import Image from 'next/image'

import { MainLayout } from '@/components/layouts'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'

const IMAGE_SIZE = 90

export default function Page() {
  return (
    <MainLayout>
      <SiteHeader>Kevin Powell #1</SiteHeader>

      <main className="space-y-8">
        <section className="text-xs">
          <h2 className="text-xl font-semibold">Intro</h2>
          <p>
            &quot;I asked people to make this simple layout and was surprised by
            the results&quot;
          </p>
          <a
            href="https://www.youtube.com/watch?v=ztBgxsgEG9A&ab_channel=KevinPowell"
            className="underline-offset-4 hover:underline"
            target="_blank"
          >
            Link to video
          </a>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Work In Progress</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <div className="flex items-center gap-4">
                <CardImage
                  src={`https://i.pravatar.cc/${IMAGE_SIZE}?u=1`}
                  alt="user avatar #1"
                />
                <div>
                  <p className="font-semibold">Anna Smith</p>
                  <p className="text-xs">UX/UI</p>
                </div>
              </div>
              <Article>
                <ArticleTitle>Lorem ipsum dolor sit amet</ArticleTitle>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  architecto aut error fuga harum ipsa magni neque odit officia
                  quibusdam tempora, ullam? Adipisci deserunt dicta, doloremque
                  ea necessitatibus pariatur repellat.
                </p>
              </Article>
            </Card>

            <Card>
              <div className="flex items-center gap-4">
                <CardImage
                  src={`https://i.pravatar.cc/${IMAGE_SIZE}?u=5`}
                  alt="user avatar #5"
                />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-xs">Developer</p>
                </div>
              </div>
              <Article>
                <ArticleTitle>Lorem ipsum dolor sit amet</ArticleTitle>
                <p className="line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias cum cumque deleniti deserunt dignissimos dolorum ducimus
                  eaque earum fugiat illo, libero, magni modi odit quibusdam
                  soluta sunt ut velit voluptas.
                </p>
              </Article>
            </Card>

            <Card className="flex gap-4">
              <div className="shrink-0">
                <CardImage
                  src={`https://i.pravatar.cc/${IMAGE_SIZE}?u=21`}
                  alt="user avatar #21"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Bob Smith</p>
                  <p className="text-xs">CTO at Company</p>
                </div>
                <Article>
                  <ArticleTitle>Lorem ipsum dolor sit amet</ArticleTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias animi aperiam assumenda commodi cupiditate est eum
                    fugiat fugit inventore laborum, placeat possimus quas quia
                    recusandae repellat sit vero vitae, voluptatibus!
                  </p>
                </Article>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}

function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'grid gap-3 rounded-lg bg-zinc-900 p-5 ring-white ring-offset-4 ring-offset-black transition last:col-span-2 hover:bg-zinc-950 hover:ring-1',
        className
      )}
    >
      {children}
    </div>
  )
}

function CardImage({
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

function Article({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <article className={cn('space-y-2 text-sm text-zinc-400', className)}>
      {children}
    </article>
  )
}

function ArticleTitle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h3 className="text-lg font-semibold leading-tight text-zinc-200">
      {children}
    </h3>
  )
}
