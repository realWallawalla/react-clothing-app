import React from 'react';

import {SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

export const WithSpinner = WrappedComponent => { 
const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
        )
 : (
    <WrappedComponent {...otherProps}></WrappedComponent>
)}
return Spinner;
};