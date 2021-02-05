import React from "react"
import Container from "./container"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}