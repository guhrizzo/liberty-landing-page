import React from 'react';
import styled from 'styled-components';

const Card = ({ title, description, icon, link, delay, isDark, highlight }) => {
  return (
    <StyledWrapper delay={delay} isDark={isDark} highlight={highlight}>
      <div className="card">
        <div className="card-details">
          <StyledIcon highlight={highlight}>
            <i className={icon}></i>
          </StyledIcon>
          <p className="text-title">{title}</p>
          <p className="text-body">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-button">
          Saiba Mais!
        </a>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 354px;
    border-radius: 20px;
    background: ${({ isDark }) => (isDark ? "#2c2c2c" : "#f5f5f5")};
    border: 2px solid ${({ isDark }) => (isDark ? "#555" : "#c3c6ce")};
    color: ${({ isDark }) => (isDark ? "#f1f1f1" : "#000")};
    position: relative;
    padding: 1.8rem;
    transition: 0.5s ease-out;
    overflow: visible;
    opacity: 0;
    transform: translateY(30px);
    animation: fade-in-up 0.8s ease-out forwards;
    animation-delay: ${({ delay }) => delay || "0s"};
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .card-details {
    color: inherit;
    height: 100%;
    gap: .5em;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 70%;
    border-radius: 1rem;
    border: none;
    background-color: ${({ highlight }) => (highlight ? "#28a745" : "#008bf8")};
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;
    cursor:pointer;
    position: absolute;
    left: 50%;
    bottom: 0;
    text-align: center;
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .text-body {
    color: ${({ isDark }) => (isDark ? "#aaa" : "rgb(134, 134, 134)")};
    width: 100%;
    font-size: 15px;
    text-align: center;
  }

  .text-title {
    font-size: 1.5em;
    width:100%;
    font-weight: bold;
    text-align: center;
  }

  /* Hover */
  .card:hover {
    border-color: ${({ highlight }) => (highlight ? "#28a745" : "#008bf8")};
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }

  i {
    color: ${({ highlight }) => (highlight ? "#28a745" : "#010101")};
    transition: color 0.3s ease;
  }

  .card:hover i {
    color: ${({ highlight }) => (highlight ? "#28a745" : "#008bf8")};
  }
`;


const StyledIcon = styled.div`
  font-size: 40px;
  text-align: center;
  transition: color 0.3s ease;

  
`;

export default Card;
