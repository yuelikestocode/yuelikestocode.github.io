/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

const SocialItem = ({ label, altText, href }) => {
  return (
    <div>
      <span className="bg-stone-200">
        {label}: <a href={href}>{altText}</a>
      </span>
    </div>
  )
}

const Bio = () => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="italic text-base">A software engineer who likes to work on interesting stuff.</p>
      </div>
      <div className="text-sm grid sm:grid-cols-2 sm:grid-rows-2 gap-1 grid-cols-1 grid-row-4">
        <SocialItem
          label="Twitter"
          altText="@YueLikesToCode"
          href="https://twitter.com/YueLikesToCode"
        />
        <SocialItem
          label="Github (Contributions)"
          altText="yuelikestocode"
          href="https://github.com/yuelikestocode"
        />
        <SocialItem
          label="Github (Personal)"
          altText="yuyueshihaoren"
          href="https://github.com/yuyueshihaoren"
        />
        <SocialItem
          label="Linkedin"
          altText="yue-yu323"
          href="https://www.linkedin.com/in/yue-yu323/"
        />
      </div>
    </div>
  )
}

export default Bio
