import { groq } from 'next-sanity'

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    "slug": slug.current,
  }
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`