import React from 'react';

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles'

const HomePage = () => ( //funtional because no state or life cycle methodds. should be a class otherwise.
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;