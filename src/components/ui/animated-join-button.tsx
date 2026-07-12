'use client';
import React from 'react';

interface AnimatedJoinButtonProps {
  label?: string;
  onClick?: () => void;
}

export function AnimatedJoinButton({ label = 'WhatsApp', onClick }: AnimatedJoinButtonProps) {
  return (
    <div className="wrapper">
      <button className="button" type="button" onClick={onClick}>
        <div className="bg" />
        <div className="wrap">
          <div className="outline" />
          <div className="content">
            <div className="icon" aria-hidden="true">
              <span className="btn-label">{label}</span>
              <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.9c0 2.1.55 4.14 1.58 5.93L2 22l4.32-1.13c1.74.95 3.72 1.45 5.72 1.45 5.46 0 9.91-4.45 9.91-9.9S17.5 2 12.04 2Zm0 17.78c-1.78 0-3.51-.47-5.01-1.35l-.36-.21-2.56.67.68-2.49-.23-.36c-.98-1.55-1.49-3.35-1.49-5.2 0-4.5 3.67-8.17 8.17-8.17s8.17 3.67 8.17 8.17-3.67 8.17-8.17 8.17Zm4.47-6.13c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2.01s.86 2.33.98 2.49c.12.16 1.69 2.58 4.1 3.61.57.25 1.02.4 1.37.51.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
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
          font-family: Arial, sans-serif;
          background: transparent;
          letter-spacing: -1px;
          border: 0;
          position: relative;
          width: clamp(128px, 32vw, 220px);
          min-width: 0;
          height: clamp(58px, 8vw, 80px);
          transform: rotate(353deg) skewX(4deg);
          transition:
            transform 0.2s ease,
            filter 0.2s ease;
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
          content: '';
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
          content: '';
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
          background: linear-gradient(to bottom, var(--green-300) 0%, var(--green-400) 100%);
          box-shadow:
            inset -2px 12px 11px -5px var(--green-200),
            inset 1px -3px 11px 0px rgb(0 0 0 / 35%);
        }

        .content::before {
          content: '';
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
          letter-spacing: 4px;
          color: var(--white);
          text-shadow: -1px 1px 2px var(--green-500);
          transition:
            transform 0.2s ease,
            color 0.2s ease;
        }

        .whatsapp-icon {
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
            inset -2px 12px 11px -5px var(--green-200),
            inset 1px -3px 11px 0px rgb(0 0 0 / 35%),
            0 0 18px rgba(67, 196, 95, 0.24);
        }

        .button:hover .btn-label {
          transform: translateY(-1px);
          color: #fefefe;
        }

        .button:hover .whatsapp-icon {
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
            font-size: clamp(1rem, 5vw, 2rem);
          }

          .btn-label {
            font-size: clamp(0.95rem, 4.8vw, 1.9rem);
            letter-spacing: 4px;
          }

          .whatsapp-icon {
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

export default AnimatedJoinButton;
