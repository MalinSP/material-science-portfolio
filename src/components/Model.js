import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  useGLTF,
  OrbitControls,
  useHelper,
  Float,
  Center,
  Environment,
  useScroll,
  ScrollControls,
} from "@react-three/drei"
import styled from "styled-components"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"
import { forwardRef } from "react"
import { useEffect, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Perf } from "r3f-perf"

gsap.registerPlugin(ScrollTrigger)

const DirectionalLight = () => {
  const directionalLight = useRef()
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)
  return (
    <directionalLight
      ref={directionalLight}
      position={[1.5, 1.5, 0]}
      intensity={0.6}
      color="#EFB786"
    />
  )
}

const Model = ({ modelRef, canvasRef }) => {
  const atom = useGLTF("./model1/scene.gltf")

  const state = useThree()
  console.log(state)

  const [onCompleteAnim, setOnCompleteAnim] = useState(true)

  function finishAnimation() {
    setOnCompleteAnim(false)
  }
  let introTimeline

  useEffect(() => {
    introTimeline = gsap.timeline({ paused: true }).fromTo(
      state.camera.position,
      {
        z: 0,
        delay: 2,
      },
      {
        z: 10,
        onComplete: finishAnimation,
        duration: 4,
        ease: "back",
      }
    )
    return () => introTimeline.kill()
  }, [])

  useEffect(() => {
    if (onCompleteAnim) {
      introTimeline.play()
    }
  }, [onCompleteAnim])

  useEffect(() => {
    if (!onCompleteAnim) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: canvasRef.current,
          start: "top top",
          end: "+=3000px",
          scrub: 2,
          markers: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      })
      tl.to(state.camera.position, { z: 1 }, "same")
      tl.to(state.camera.rotation, { y: -Math.PI * 2 }, "same")
    }
  }, [onCompleteAnim])

  return (
    <Float floatIntensity={0.7} speed={0.55}>
      <group ref={modelRef}>
        <primitive
          object={atom.scene}
          scale={0.025}
          position={[2, -4.5, 2.5]}
          // position={[2.5, -1.6, 0]}
          // rotation={[1, 0, 0]}
          castShadow
          receiveShadow
        />
      </group>
    </Float>
  )
}

export default function CanvasModel() {
  const modelRef = useRef()
  const canvasRef = useRef()

  return (
    <CanvasContainerWrapper>
      <Canvas
        camera={{ position: [0, 0, 10], far: 10 }}
        shadows
        ref={canvasRef}
      >
        <Environment preset="night" />
        {/* <ambientLight intensity={0.1} /> */}
        <DirectionalLight />
        <fog args={["#483948", 1, 7]} attach="fog" />
        <color args={["#483948"]} attach="background" />
        <Model modelRef={modelRef} canvasRef={canvasRef} />
        {/* <OrbitControls /> */}
        <Perf position="top-left" />
      </Canvas>
    </CanvasContainerWrapper>
  )
}

const CanvasContainerWrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  outline: none;
 height: calc(var(--vh, 1vh) * 100); */
`
