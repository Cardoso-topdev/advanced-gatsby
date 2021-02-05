import React from "react"
import containerStyles from "./container.module.css"

export default function Container({ children }) {
  console.log(containerStyles)
  return <div className={containerStyles.container}>{children}</div>
}