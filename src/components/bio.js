import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Logo } from "./logo"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: '4rem',
          minHeight: '4rem',
          width: '4rem',
          height: '4rem'
        }}
      >
        <Logo style={{padding: '0.4rem', borderRadius: '1rem'}}  />
      </div>
      <p>
        Written by <strong>{author}</strong> who works at <a href="https://collibra.com">Collibra</a> as a Frontend developer.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
