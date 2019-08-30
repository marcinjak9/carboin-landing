import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const html = `<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#BB5794 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 22px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/carboin"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>`

const NavWrapper = styled.nav`
  font-weight: bold;

  @media (max-width: 1000px) {
    .navbar-brand {
      display: flex;
      justify-content: space-around;
      width: 100%;
      align-items: center
    }
  }
`

const MenuFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    text-align: center;
    display: flex;
    flex-direction: column;

    a {
      font-size: 2.2rem;
      color: #fff;
      font-weight: bold;
      display: block;
      margin: 1rem;
    }
  }

  a.close-btn {
    font-size: 1rem;
    position: absolute;
    top: 30px;
    right: 30px;
    color: #fff;
  }
`

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      {isOpen && (
        <MenuFixed className="has-background-success">
          <div className="container">
            <Link href="/">
              <a onClick={() => setIsOpen(false)}>Home</a>
            </Link>
            <Link href="/the-environmental-problem">
              <a onClick={() => setIsOpen(false)}>The problem</a>
            </Link>
            <Link href="/how-it-works">
              <a onClick={() => setIsOpen(false)}>How it works</a>
            </Link>
            <div className="buttons" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <a href="https://app.carboin.org/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="https://app.carboin.org/login" className="button is-light is-inverted">
                  Log in
                </a>
                <span dangerouslySetInnerHTML={{ __html: html }}></span>
              </div>
          </div>
            <a className="close-btn" onClick={() => setIsOpen(false)}>close</a>
        </MenuFixed>
      )}
      <NavWrapper className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/static/logo.svg" width="112" height="28" />
          </a>

          <a onClick={() => setIsOpen(!isOpen)} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">
                Home
              </a>
            </Link>
            <Link href="/the-environmental-problem">
              <a className="navbar-item">
                The problem
              </a>
            </Link>
            <Link href="/how-it-works">
              <a className="navbar-item">
                How it works
              </a>
            </Link>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons" style={{ alignItems: 'flex-start' }}>
                <a href="https://app.carboin.org/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="https://app.carboin.org/login" className="button is-light">
                  Log in
                </a>
                <span dangerouslySetInnerHTML={{ __html: html }}></span>
              </div>
            </div>
          </div>
        </div>
      </NavWrapper>
    </>
  )
}

export default Nav
