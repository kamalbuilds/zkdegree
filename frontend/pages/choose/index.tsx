// @ts-nocheck

import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Dynamicard from '../../components/Dynamiccard';

const theme = extendTheme({
  // Add your custom theme configuration here if needed
});

function University() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} className="gap-8">

        <Dynamicard
          name="University of California, Berkeley"
          location="California, USA"
          students={23}
          url="berkeley"
          imageUrl="https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        />

        <Dynamicard
          name="Delhi College of Engineering"
          location="Delhi, India"
          students={15}
          url="dtu"
          imageUrl="https://example.com/another-image.jpg"
          avatarUrl="https://example.com/another-avatar.jpg"
        />

        <Dynamicard
          name="Harvard University"
          location="Cambridge, USA"
          students={30}
          url="harvard"
          imageUrl="https://example.com/harvard-image.jpg"
          avatarUrl="https://example.com/harvard-avatar.jpg"
        />

        <Dynamicard
          name="Oxford University"
          location="Oxford, UK"
          students={25}
          url="oxford"
          imageUrl="https://example.com/oxford-image.jpg"
          avatarUrl="https://example.com/oxford-avatar.jpg"
        />

        {/* Add more Dynamicard components with different details here */}
      </div>
    </ChakraProvider>
  );
}

export default University;
