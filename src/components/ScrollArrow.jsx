import React from 'react';
import styled from 'styled-components';

const ScrollArrow = ({ targetSelector = '.food-grid' }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetSelector);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledWrapper>
      <div className="main__action">
        <a href={`#${targetSelector}`} className="main__scroll" onClick={handleClick} aria-label="Scroll down">
          <div className="main__scroll-box">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="white" />
            </svg>
          </div>
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .main__scroll {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .main__scroll-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .main__action:hover .main__scroll-box {
    animation: scroll-down 3s infinite;
  }

  @keyframes scroll-down {
    0%, 100% {
      transform: translateY(0);
      opacity: 1;
    }
    35% {
      transform: translateY(10px);
      opacity: 0;
    }
    70% {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
`;

export default ScrollArrow;
