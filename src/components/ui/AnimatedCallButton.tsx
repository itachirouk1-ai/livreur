"use client";
import React from "react";

interface AnimatedJoinButtonProps {
  label?: string;
  onClick?: () => void;
}

export function AnimatedCallButton({ label = "Appeler", onClick }: AnimatedJoinButtonProps) {
  return (
    <div className="wrapper">
      <button className="button" type="button" onClick={onClick}>
        <div className="bg" />
        <div className="wrap">
          <div className="outline" />
          <div className="content">
            <div className="icon" aria-hidden="true">
              <span className="btn-label">{label}</span>
              <svg viewBox="0 0 24 24" className="phone-icon" fill="currentColor">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.02L6.6 10.8Z" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <style jsx>{`
        .wrapper {
          display: inline-flex;
          width: auto;
          max-width: 100%;
          flex: 0 0 auto;
        }

        .button {
          --white: #f7fff9;
          --blue-100: #dceeff;
          --blue-200: #a9d2ff;
          --blue-300: #4a95ff;
          --blue-400: #2567d9;
          --blue-500: #1749a8;
          --radius: 18px;

          border-radius: var(--radius);
          outline: none;
          cursor: pointer;
          font-size: 23px;
          font-family: Arial, sans-serif;
          background: transparent;
          letter-spacing: -1px;
          border: 0;
          position: relative;
          width: clamp(128px, 32vw, 220px);
          min-width: 0;
          height: clamp(58px, 8vw, 80px);
          transform: rotate(353deg) skewX(4deg);
          transition: transform 0.2s ease, filter 0.2s ease;
          padding: 0;
        }

        .button:hover {
          filter: brightness(1.03);
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
          background: var(--blue-500);
        }

        .bg::before {
          filter: blur(5px);
          transition: all 0.3s ease;
          box-shadow:
            -7px 6px 0 0 rgb(23 73 168 / 40%),
            -14px 12px 0 0 rgb(23 73 168 / 30%),
            -21px 18px 4px 0 rgb(23 73 168 / 25%),
            -28px 24px 8px 0 rgb(23 73 168 / 15%),
            -35px 30px 12px 0 rgb(23 73 168 / 12%),
            -42px 36px 16px 0 rgb(23 73 168 / 8%),
            -56px 42px 20px 0 rgb(23 73 168 / 5%);
        }

        .wrap {
          border-radius: inherit;
          overflow: hidden;
          height: 100%;
          transform: translate(6px, -6px);
          padding: 3px;
          background: linear-gradient(to bottom, var(--blue-100) 0%, var(--blue-400) 100%);
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
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          position: relative;
          height: 100%;
          width: 100%;
          gap: 16px;
          border-radius: calc(var(--radius) * 0.85);
          font-weight: 600;
          transition: all 0.3s ease;
          background: linear-gradient(to bottom, var(--blue-300) 0%, var(--blue-400) 100%);
          box-shadow:
            inset -2px 12px 11px -5px var(--blue-200),
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
          background: linear-gradient(to bottom, transparent, var(--blue-400));
          filter: brightness(1.3) blur(5px);
        }

        .icon {
          animation: none;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          padding: 0 12px;
        }

        .btn-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          font-size: clamp(1.05rem, 2.4vw, 1.45rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: 1px;
          color: var(--white);
          text-shadow: -1px 1px 2px var(--blue-500);
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .phone-icon {
          width: clamp(20px, 3vw, 30px);
          height: clamp(20px, 3vw, 30px);
          color: var(--white);
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
          transition: transform 0.2s ease;
        }

        .button:hover .wrap {
          transform: translate(8px, -8px);
        }

        .button:hover .outline {
          opacity: 1;
        }

        .button:hover .content {
          box-shadow:
            inset -2px 12px 11px -5px var(--blue-200),
            inset 1px -3px 11px 0px rgb(0 0 0 / 35%),
            0 0 18px rgba(37, 103, 217, 0.24);
        }

        .button:hover .btn-label {
          transform: translateY(-1px);
          color: #fefefe;
        }

        .button:hover .phone-icon {
          transform: scale(1.08);
        }

        .button:active .wrap {
          transform: translate(3px, -3px);
        }

        .button:active .content {
          transform: translate(1px, -1px);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .wrapper {
            width: 100%;
            justify-content: center;
          }

          .button {
            width: 60%;
            min-width: 0;
            height: 54px;
            margin: 0 auto;
            transform: rotate(353deg) skewX(4deg) scale(0.95);
          }

          .content {
            gap: 8px;
            padding: 0 10px;
          }

          .icon {
            font-size: clamp(1.15rem, 5vw, 2rem);
          }

          .btn-label {
            font-size: clamp(0.95rem, 4.8vw, 1.9rem);
            letter-spacing: 1px;
            letter-spacing:4px
          }

          .phone-icon {
            width: 1em;
            height: 1em;
          }
        }

        @media (max-width: 360px) {
          .button {
            height: 50px;
            transform: rotate(353deg) skewX(4deg) scale(0.9);
          }

          .btn-label {
            font-size: clamp(0.85rem, 5vw, 1rem);
          }
        }
      `}</style>
    </div>
  );
}

export default AnimatedCallButton;
