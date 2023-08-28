// @ts-nocheck

import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Enrolleduniv from '../../components/Enrolleduniv';

const theme = extendTheme({
  // Add your custom theme configuration here if needed
});

function University() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <h2 className='text-center text-lg text-green-400'>Select the Enrolled University</h2>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }} className="gap-8">
      <Enrolleduniv
          name="University of California, Berkeley"
          location="California, USA"
          students={23}
          url="berkeley"
          imageUrl="https://www.tclf.org/sites/default/files/thumbnails/image/CA_Berkeley_UniversityOfCaliforniaAtBerkeley_byCharlieNguyen-Flickr_2008_001_Sig.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/150px-Seal_of_University_of_California%2C_Berkeley.svg.png"
        />

        <Enrolleduniv
          name="Delhi College of Engineering"
          location="Delhi, India"
          students={15}
          url="dtu"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/DelhiCollegeOfEngineering_BawanaCampus.jpg/220px-DelhiCollegeOfEngineering_BawanaCampus.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/DTU%2C_Delhi_official_logo.png/200px-DTU%2C_Delhi_official_logo.png"
        />

        <Enrolleduniv
          name="Harvard University"
          location="Cambridge, USA"
          students={30}
          url="harvard"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Harvard_Medical_School_HDR.jpg/220px-Harvard_Medical_School_HDR.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/150px-Harvard_shield_wreath.svg.png"
        />

        <Enrolleduniv
          name="Oxford University"
          location="Oxford, UK"
          students={25}
          url="oxford"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mob_Quad_from_Chapel_Tower.jpg/220px-Mob_Quad_from_Chapel_Tower.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_the_University_of_Oxford.svg/135px-Coat_of_arms_of_the_University_of_Oxford.svg.png"
        />

        {/* Add more Enrolleduniv components with different details here */}
      </div>
    </ChakraProvider>
  );
}

export default University;
