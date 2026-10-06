import { useEffect } from 'react'
import { practice } from '../data/site'

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${practice.shortName}` : `${practice.shortName} | Mobile Primary Care & Wound Care in Chandler, AZ`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
