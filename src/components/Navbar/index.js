import React from "react"
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements"

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>dolla</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}
