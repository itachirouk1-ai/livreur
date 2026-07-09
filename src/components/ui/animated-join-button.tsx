import React from "react";
import styled from "styled-components";

interface AnimatedJoinButtonProps {
  label?: string;
}

export function AnimatedJoinButton({ label = "WHATSAPP" }: AnimatedJoinButtonProps) {
  const displayLabel = label.toUpperCase().replace(/\s+/g, "");
  const firstLine = displayLabel.split("");
  const secondLine = [] as string[];

  return (
    <StyledWrapper>
      <button className="button" type="button">
        <div className="bg" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 342 208" height={208} width={342} className="splash">
          <path strokeLinecap="round" strokeWidth={3} d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362" />
          <path strokeLinecap="round" strokeWidth={3} d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893" />
          <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.3" d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272" />
          <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.3" d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449" />
          <path strokeLinecap="round" strokeWidth={3} d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998" />
          <path strokeLinecap="round" strokeWidth={3} d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976" />
          <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.3" d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227" />
          <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.3" d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924" />
          <path strokeLinecap="round" strokeWidth={3} d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998" />
          <path strokeLinecap="round" strokeWidth={3} d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976" />
          <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.3" d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272" />
          <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.3" d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449" />
        </svg>
        <div className="wrap">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 221 42" height={42} width={221} className="path">
            <path strokeLinecap="round" strokeWidth={3} d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855" />
          </svg>
          <div className="outline" />
          <div className="content">
            <span className="char state-1">
              {firstLine.map((char, index) => (
                <span key={`first-${index}`} data-label={char} style={{ ["--i" as string]: index + 1 } as React.CSSProperties}>
                  {char}
                </span>
              ))}
            </span>
            <div className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 2.1.55 4.14 1.58 5.93L2 22l4.32-1.13c1.74.95 3.72 1.45 5.72 1.45 5.46 0 9.91-4.45 9.91-9.9S17.5 2 12.04 2Zm0 17.78c-1.78 0-3.51-.47-5.01-1.35l-.36-.21-2.56.67.68-2.49-.23-.36c-.98-1.55-1.49-3.35-1.49-5.2 0-4.5 3.67-8.17 8.17-8.17s8.17 3.67 8.17 8.17-3.67 8.17-8.17 8.17Zm4.47-6.13c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01s.86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.61.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
            </div>
            {secondLine.length > 0 ? (
              <span className="char state-2">
                {secondLine.map((char, index) => (
                  <span key={`second-${index}`} data-label={char} style={{ ["--i" as string]: index + 1 } as React.CSSProperties}>
                    {char}
                  </span>
                ))}
              </span>
            ) : null}
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --white: #f7fff9;
    --green-100: #d8f8e0;
    --green-200: #9be4a9;
    --green-300: #43c45f;
    --green-400: #25a53f;
    --green-500: #167a2f;
    --radius: 18px;

    border-radius: var(--radius);
    outline: none;
    cursor: pointer;
    font-size: 23px;
    font-family: Arial;
    background: transparent;
    letter-spacing: -1px;
    border: 0;
    position: relative;
    width: 220px;
    height: 80px;
    transform: rotate(353deg) skewX(4deg);
  }

  .bg {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    filter: blur(1px);
  }
  .bg::before,
  .bg::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: calc(var(--radius) * 1.1);
    background: var(--green-500);
  }
  .bg::before {
    filter: blur(5px);
    transition: all 0.3s ease;
    box-shadow:
      -7px 6px 0 0 rgb(22 122 47 / 40%),
      -14px 12px 0 0 rgb(22 122 47 / 30%),
      -21px 18px 4px 0 rgb(22 122 47 / 25%),
      -28px 24px 8px 0 rgb(22 122 47 / 15%),
      -35px 30px 12px 0 rgb(22 122 47 / 12%),
      -42px 36px 16px 0 rgb(22 122 47 / 8%),
      -56px 42px 20px 0 rgb(22 122 47 / 5%);
  }

  .wrap {
    border-radius: inherit;
    overflow: hidden;
    height: 100%;
    transform: translate(6px, -6px);
    padding: 3px;
    background: linear-gradient(to bottom, var(--green-100) 0%, var(--green-400) 100%);
    position: relative;
    transition: all 0.3s ease;
  }

  .outline {
    position: absolute;
    overflow: hidden;
    inset: 0;
    opacity: 0;
    outline: none;
    border-radius: inherit;
    transition: all 0.4s ease;
  }
  .outline::before {
    content: "";
    position: absolute;
    inset: 2px;
    width: 120px;
    height: 300px;
    margin: auto;
    background: linear-gradient(to right, transparent 0%, white 50%, transparent 100%);
    animation: spin 3s linear infinite;
    animation-play-state: paused;
  }

  .content {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    height: 100%;
    gap: 16px;
    border-radius: calc(var(--radius) * 0.85);
    font-weight: 600;
    transition: all 0.3s ease;
    background: linear-gradient(to bottom, var(--green-300) 0%, var(--green-400) 100%);
    box-shadow:
      inset -2px 12px 11px -5px var(--green-200),
      inset 1px -3px 11px 0px rgb(0 0 0 / 35%);
  }
  .content::before {
    content: "";
    inset: 0;
    position: absolute;
    z-index: 10;
    width: 80%;
    top: 45%;
    bottom: 35%;
    opacity: 0.7;
    margin: auto;
    background: linear-gradient(to bottom, transparent, var(--green-400));
    filter: brightness(1.3) blur(5px);
  }

  .char {
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .char span {
    display: block;
    color: transparent;
    position: relative;
  }
  .char span:nth-child(5) {
    margin-left: 5px;
  }
  .char.state-1 span:nth-child(5) {
    margin-right: -3px;
  }
  .char.state-1 span {
    animation: charAppear 1.2s ease backwards calc(var(--i) * 0.03s);
  }
  .char.state-1 span::before,
  .char span::after {
    content: attr(data-label);
    position: absolute;
    color: var(--white);
    text-shadow: -1px 1px 2px var(--green-500);
    left: 0;
  }
  .char span::before {
    opacity: 0;
    transform: translateY(-100%);
  }
  .char.state-2 {
    position: absolute;
    left: 80px;
  }
  .char.state-2 span::after {
    opacity: 1;
  }

  .icon {
    animation: resetArrow 0.8s cubic-bezier(0.7, -0.5, 0.3, 1.2) forwards;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .whatsapp-icon {
    width: 18px;
    height: 18px;
    color: var(--white);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
  }

  .path {
    position: absolute;
    z-index: 12;
    bottom: 0;
    left: 0;
    right: 0;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    pointer-events: none;
  }

  .splash {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    stroke-dasharray: 60 60;
    stroke-dashoffset: 60;
    transform: translate(-17%, -31%);
    stroke: var(--green-300);
  }

  .button:hover .wrap {
    transform: translate(8px, -8px);
  }

  .button:hover .outline {
    opacity: 1;
  }

  .button:hover .outline::before,
  .button:hover .icon div::before,
  .button:hover .icon div::after,
  .button:hover .icon div {
    animation-play-state: running;
  }

  .button:active .bg::before {
    filter: blur(5px);
    opacity: 0.7;
    box-shadow:
      -7px 6px 0 0 rgb(115 75 155 / 40%),
      -14px 12px 0 0 rgb(115 75 155 / 25%),
      -21px 18px 4px 0 rgb(115 75 155 / 15%);
  }
  .button:active .content {
    box-shadow:
      inset -1px 12px 8px -5px rgba(6, 95, 31, 0.4),
      inset 0px -3px 8px 0px var(--green-200);
  }

  .button:active .outline {
    opacity: 0;
  }

  .button:active .wrap {
    transform: translate(3px, -3px);
  }

  .button:active .splash {
    animation: splash 0.8s cubic-bezier(0.3, 0, 0, 1) forwards 0.05s;
  }

  .button:focus .path {
    animation: path 1.6s ease forwards 0.2s;
  }

  .button:focus .icon {
    animation: arrow 1s cubic-bezier(0.7, -0.5, 0.3, 1.5) forwards;
  }

  .char.state-2 span::after,
  .button:focus .char.state-1 span {
    animation: charDisappear 0.5s ease forwards calc(var(--i) * 0.03s);
  }

  .button:focus .char.state-2 span::after {
    animation: charAppear 1s ease backwards calc(var(--i) * 0.03s);
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes charAppear {
    0% {
      transform: translateY(50%);
      opacity: 0;
      filter: blur(20px);
    }
    20% {
      transform: translateY(70%);
      opacity: 1;
    }
    50% {
      transform: translateY(-15%);
      opacity: 1;
      filter: blur(0);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes charDisappear {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-70%);
      opacity: 0;
      filter: blur(3px);
    }
  }

  @keyframes arrow {
    0% {
      opacity: 1;
    }
    50% {
      transform: translateX(60px);
      opacity: 0;
    }
    51% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(-128px);
      opacity: 1;
    }
  }

  @keyframes swingArrow {
    50% {
      transform: translateX(5px) scale(0.9);
    }
  }

  @keyframes rotateArrowLine {
    50% {
      transform: rotate(30deg);
    }
    80% {
      transform: rotate(55deg);
    }
  }

  @keyframes rotateArrowLine2 {
    50% {
      transform: rotate(330deg);
    }
    80% {
      transform: rotate(300deg);
    }
  }

  @keyframes resetArrow {
    0% {
      transform: translateX(-128px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 640px) {
    .button {
      width: 150px;
      height: 58px;
      transform: rotate(353deg) skewX(4deg) scale(0.9);
      font-size: 16px;
    }

    .content {
      gap: 10px;
    }

    .whatsapp-icon {
      width: 16px;
      height: 16px;
    }
  }

  @keyframes path {
    from {
      stroke: white;
    }
    to {
      stroke-dashoffset: -480;
      stroke: #b9f6c5;
    }
  }

  @keyframes splash {
    to {
      stroke-dasharray: 2 60;
      stroke-dashoffset: -60;
    }
  }
`;

export default AnimatedJoinButton;
