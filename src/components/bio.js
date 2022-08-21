/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <div>
        <p>A software engineer who likes to work on interesting stuff.</p>
        <div className="Social">
          <div>
            Twitter:{" "}
            <a href="https://twitter.com/YueLikesToCode">@YueLikesToCode</a>
          </div>
          <div>
            Github (Contributions):{" "}
            <a href="https://github.com/yuelikestocode">yuelikestocode</a>
          </div>
          <div>
            Github (Personal):{" "}
            <a href="https://github.com/yuyueshihaoren">yuyueshihaoren</a>
          </div>
          <div>
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/yue-yu323/">yue-yu323</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
