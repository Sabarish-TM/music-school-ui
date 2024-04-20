import React from 'react';
import { styled } from '@mui/material/styles';
import SideBar from './SideBar';

const MainContent = styled('div')({
  flexGrow: 1,
  p: 20,
});

const LayoutContainer = styled('div')({
  display: 'flex',
});

const SideBarContainer = styled('div')({
  // flexShrink: 0,
});

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '95%',
  marginTop: '65px',
});

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <ContentContainer>
        <MainContent>{children}</MainContent>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;