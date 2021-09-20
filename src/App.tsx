import React from 'react';
import { Contact } from './components/Contact';
import { Functionalities } from './components/Functionalities';
import { FunctionalitiesList } from './components/FunctionalitiesList';
import { MainBanner } from './components/mainBanner';
import { MainFooter } from './components/MainFooter';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle/>
      <MainBanner/>
      <Functionalities></Functionalities>
      <FunctionalitiesList/>
      <Contact></Contact>
      <MainFooter></MainFooter>
    </>
  )
    
  }
