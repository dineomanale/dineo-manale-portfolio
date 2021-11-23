import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,  } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20'}}>
          <DiCssdeck size="3rem"/><span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects </NavLink>
        </Link>
        </li>    
    </Div2>
    <Div3>
      <SocialIcons href="www.linkedin.com/in/dineo-m-77bb1118b">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>

);

export default Header;
