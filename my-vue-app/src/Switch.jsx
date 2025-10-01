import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDark } from './DarkModeContext';

const Switch = () => {
  const { isDark, toggleDarkMode } = useDark();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <MobileToggle onClick={toggleDarkMode}>
        {isDark ?  '🌙' : '☀️'}
      </MobileToggle>
    );
  }

  return (
    <StyledWrapper>
      <div className="container">
        <label htmlFor="switch" className="toggle">
          <input
            type="checkbox"
            className="input"
            id="switch"
            checked={isDark}
            onChange={toggleDarkMode}
          />
          <span className="icons">
            <div className="icon icon--moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333" width={32} height={32}>
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="icon icon--sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F1C40F" width={32} height={32}>
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </div>
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
};

// Estilo do switch original
const StyledWrapper = styled.div`
  .toggle {
    background-color: #fff;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.04);
    position: relative;
  }

  .input {
    display: none;
  }

  .icons {
    display: grid;
    place-items: center;
    position: relative;
  }

  .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 500ms ease;
  }

  .icon--sun {
    transform: scale(1);
  }

  .icon--moon {
    transform: scale(0);
  }

  .input:checked ~ .icons .icon--sun {
    transform: scale(0) rotate(360deg);
  }

  .input:checked ~ .icons .icon--moon {
    transform: scale(1) rotate(360deg);
  }
`;

// Estilo do emoji no mobile
const MobileToggle = styled.div`
  font-size: 26px;
  cursor: pointer;
  padding: 10px;
`;

export default Switch;
