import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { TiLocationArrow } from "react-icons/ti"

const Team = () => {
  return (
    <TeamWrapper>
      <div className="bg">
        <h3>our PEOPLE</h3>
        <article className="content">
          <div className="img-container">
            <StaticImage
              src="../images/klukin.jpg"
              alt="KlyukinK"
              className="img"
            />
          </div>
          <div className="person-description">
            <h4>Konstantin Klyukin</h4>
            <span>
              <TiLocationArrow className="location-icon" /> 281 Wilmore
              Laboratories Auburn University Auburn, Al 36849
            </span>
            <p className="title">Assistant Professor</p>
            <p>
              B.S. Applied Mathematics and Physics, Saint Petersburg State
              University Ph.D. Condensed Matter Physics, Saint Petersburg State
              University
            </p>
          </div>
          <div className="btn-container">
            <button>/ Download CV</button>
          </div>
        </article>
      </div>
    </TeamWrapper>
  )
}

const TeamWrapper = styled.section`
  height: 100vh;
  color: var(--h1);
  position: relative;
  width: 90vw;
  margin: 0 auto;
  h3 {
    font-size: 5rem;
    padding-top: 5rem;
    text-transform: uppercase;
    text-align: center;
  }
  .content {
    margin-top: -1.2rem;
    display: grid;
    .img {
      border-radius: 2rem;
      z-index: 1;
    }
    .person-description {
      padding: 1rem 1.5rem;
      background-color: var(--description-bg);
      border-radius: 0.25rem;
      margin-top: -1.5rem;
      z-index: 2;
      color: var(--description-color-text);
      letter-spacing: 0.02rem;
      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        font-weight: 700;
      }
      span {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-weight: 200;
        color: var(--location-color-text);
        .location-icon {
          margin-right: 1rem;
          font-size: 2.5rem;
        }
      }
      .title {
        font-size: 0.8rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.2;
      }
    }
    .btn-container {
      text-align: center;
      margin-top: 2rem;
      button {
        background-color: transparent;
        border: none;
        color: var(--description-bg);
        text-transform: upperCase;
        letter-spacing: 0.02rem;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`

export default Team
