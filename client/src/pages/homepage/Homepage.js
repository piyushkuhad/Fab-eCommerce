import React from 'react';
import Directory from '../../components/directory/Directory';

import { HomePageContainer } from './Homepage.styles';

const Homepage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

//Using React Profiler
{
  /* <HomePageContainer>
  <Profiler
    id="Directory"
    onRender={(id, phase, actualDuration) => {
      console.log({ id, phase, actualDuration });
    }}
  >
    <Directory />
  </Profiler>
</HomePageContainer>; */
}

export default Homepage;
