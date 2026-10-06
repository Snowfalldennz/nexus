import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: string
  children?: ReactNode
}

/** Coloured title band at the top of inner pages. */
export function PageHero({ eyebrow, title, children }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="page-hero-lead">{children}</div>}
      </div>
    </section>
  )
}
