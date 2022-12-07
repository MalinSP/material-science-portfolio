import React, { useEffect, useState } from "react"
import "reset-css"
import "../css/main.css"
import CanvasModel from "../components/Model"
import Hero from "../components/Hero"
import { debounce } from "../debounce.js"
import Team from "../components/Team"
import Join from "../components/Join"

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

export default function Home() {
  const [dimensions, setDimensions] = useState({
    height: defaultHeight,
    width: defaultWidth,
  })

  useEffect(() => {
    let vh = dimensions.height * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)
    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [dimensions.height])

  return (
    <>
      <CanvasModel />
      {/* <Hero />
      <Team />
      <Join /> */}
    </>
  )
}
