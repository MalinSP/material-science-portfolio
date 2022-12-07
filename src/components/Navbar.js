import React from "react"
import styled from "styled-components"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="logo">KK</div>
        <div className="navigation">
          <ul className="navigation-buttons">
            <li>Home</li>
            <li>Research</li>
            <li>People</li>
            <li>Publications</li>
          </ul>
        </div>
        {/* <div className="menu-btn">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </div> */}
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: fixed;
  color: var(--h1);
  width: 100%;
  height: 2.6rem;
  z-index: 1;
  display: grid;
  place-items: center;
  .nav-center {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    align-items: center;
    margin-top: 1rem;

    .logo {
    }
    .menu-btn {
      display: grid;
      gap: 0.32rem;
      justify-items: end;
    }
    .bar1,
    .bar2,
    .bar3 {
      height: 1px;
      background-color: white;
      display: block;
    }
    .bar1 {
      width: 10px;
    }
    .bar2 {
      width: 15px;
    }
    .bar3 {
      width: 20px;
    }
  }
  .navigation {
    width: 40vw;
    .navigation-buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        font-size: 1.15rem;
        letter-spacing: 0.1rem;
      }
    }
  }
`

export default Navbar
