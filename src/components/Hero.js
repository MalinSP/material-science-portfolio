import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import { useThree } from "@react-three/fiber"

const Hero = () => {
  const handleClick = e => {
    console.log(e)
  }
  return (
    <>
      <Navbar />
      <HeroWrapper>
        <div className="info">
          <h1>
            We are a computational materials group based in the Department of
            Materials Engineering at Auburn University
          </h1>
          <p>
            Our group is interested in developing a fundamental understanding of
            the physics and chemistry of materials for clean energy and
            information technologies. Most of our investigations are based on
            quantum-mechanical calculations using high-performance computational
            facilities. We employ various simulation techniques to predict
            material properties, understand atomic-scale processes, and design
            novel materials with improved characteristics.
          </p>
          <div className="btn-container">
            <button onClick={handleClick}>
              <img src="./explore2.svg" alt="explore" />
            </button>
          </div>
        </div>
      </HeroWrapper>
    </>
  )
}

const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  place-items: center;
  .info {
    width: 90vw;
  }
  h1 {
    text-align: left;
    font-size: 2.8rem;
    line-height: 1.1;
    letter-spacing: 0.05rem;
    color: var(--h1);
    padding-top: 3rem;
    width: 50vw;
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.4;
    color: var(--h1);
    /* text-align: right; */
    width: 50vw;
    padding-bottom: 3rem;
    letter-spacing: 0.05rem;
    font-size: 1rem;
  }
  .btn-container {
    text-align: center;
    width: 50vw;
    button {
      background-color: transparent;
      border: none;
      color: var(--h1);
      /* text-transform: upperCase;
      letter-spacing: 0.1rem; */

      cursor: pointer;
      /* font-size: 1.6rem;
      font-weight: 700; */
      img {
        height: 75px;
      }
    }
  }
`

export default Hero
