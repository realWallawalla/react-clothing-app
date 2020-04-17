import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'

const HomePage = () => ( //funtional because no state or life cycle methodds. should be a class otherwise.
    <div className="homepage">
        <Directory />
    </div>
);

export default HomePage;