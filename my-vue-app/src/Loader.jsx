// Loader.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDark } from './DarkModeContext';

import LogoBlue from './assets/logo-liberty-car-blue.png'
import './Loader.css'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ isDark }) => (isDark ? '#2c2c2c' : '#e5e5e5a1')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Spinner = styled.div`
  border: 5px solid #ccc;
  border-top: 5px solid #008bf8;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 10px;
  animation: ${spin} 1s linear infinite;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 25%;
  background-color: ${({ isDark }) => (isDark ? '#00000025' : '#b6b2b227')};
  align-items: center;
  border-radius: 20px;
  height: 50%;
  border: 2px solid ${({ isDark }) => (isDark ? "#c3c6ce1e" : "#c3c6ce")};
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    padding: 20px;
  }
`;

const Loader = () => {

    const { isDark } = useDark();

    return (
        <LoaderWrapper isDark={isDark}>

            <ContentBox isDark={isDark}>
                <img src={LogoBlue} alt="Logo-liberty-car" style={{ height: 80, margin: 10, }} />
                <h1 style={{ color: '#008bf8'}}>Construindo Ambiente...</h1>
                <h2 style={{ fontSize: 26 }}>Levará somente um instante!</h2>
                <Spinner />
            </ContentBox>

        </LoaderWrapper>
    );
};

export default Loader;
