"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import styled from "styled-components";

export function DarkLightModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3">
        
      <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 md:flex">
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">FR</span>
        <span className="text-slate-300">/</span>
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">EN</span>
      </div>

      <StyledWrapper>
        <label className="spark-switch" aria-label="Toggle color mode">
          <input
            type="checkbox"
            checked={isDark}
            onChange={(event) => setTheme(event.target.checked ? "dark" : "light")}
            aria-label="Toggle color mode"
          />
          <div className="track">
            <div className="stars">
              <span className="star" />
              <span className="star" />
              <span className="star" />
              <span className="star" />
            </div>
            <div className="knob">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </label>
      </StyledWrapper>

      <Button className="hidden h-11 items-center gap-2 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 px-6 text-sm font-bold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.45)] transition-all duration-200 hover:scale-[1.04] sm:inline-flex">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.946-2.504 2.292-2.504 3.964 0 1.744.822 3.357 2.322 4.521l-.333 2.332 2.532-1.313c1.24.657 2.305 1.059 2.715 1.059.033 0 .066 0 .098 0 5.338 0 9.516-4.226 9.516-9.45 0-2.409-.906-4.869-2.562-6.603-1.656-1.735-3.935-2.908-6.784-2.908z"/>
        </svg>
        WhatsApp
      </Button>
    </div>
  );
}

const StyledWrapper = styled.div`
  .spark-switch {
    display: inline-block;
    font-size: 20px;
  }

  .spark-switch input {
    display: none;
  }

  .spark-switch .track {
    position: relative;
    width: 5em;
    height: 2.5em;
    background: #080e27;
    border-radius: 1.25em;
    cursor: pointer;
    overflow: hidden;
    border: 0.1em solid rgba(255, 255, 255, 0.15);
    box-shadow:
      inset 0 0.2em 0.5em rgba(0, 0, 0, 0.6),
      0 0.2em 0.4em rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
  }

  .spark-switch .track::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #3478f6, #f5ba1f);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .spark-switch .knob {
    position: absolute;
    top: 0.15em;
    left: 0.15em;
    width: 2em;
    height: 2em;
    background: #f7f7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  }

  .spark-switch .knob svg {
    width: 1.2em;
    height: 1.2em;
    color: #272727;
    transition: color 0.4s ease, transform 0.4s ease;
  }

  .spark-switch input:checked + .track {
    border-color: rgba(245, 186, 31, 0.8);
    box-shadow:
      inset 0 0.1em 0.3em rgba(0, 0, 0, 0.4),
      0 0 0.6em 0.1em rgba(245, 186, 31, 0.4);
  }

  .spark-switch input:checked + .track .knob {
    transform: translateX(2.5em);
  }

  .spark-switch input:checked + .track::before {
    opacity: 1;
  }

  .spark-switch input:checked + .track .knob svg {
    color: #f5ba1f;
    transform: scale(1.1);
  }

  .spark-switch .stars {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .spark-switch .star {
    position: absolute;
    background: #f7f7f7;
    border-radius: 50%;
    transition: width 0.3s, height 0.3s, background 0.3s, border-radius 0.3s;
  }

  .spark-switch .star:nth-child(1) {
    top: 0.4em;
    left: 100%;
    width: 0.15em;
    height: 0.15em;
    animation: drift 3s linear infinite;
  }

  .spark-switch .star:nth-child(2) {
    top: 1.2em;
    left: 100%;
    width: 0.2em;
    height: 0.2em;
    animation: drift 4s linear infinite 1s;
  }

  .spark-switch .star:nth-child(3) {
    top: 2em;
    left: 100%;
    width: 0.1em;
    height: 0.1em;
    animation: drift 2.5s linear infinite 0.5s;
  }

  .spark-switch .star:nth-child(4) {
    top: 0.8em;
    left: 100%;
    width: 0.15em;
    height: 0.15em;
    animation: drift 5s linear infinite 2s;
  }

  .spark-switch input:checked + .track .star {
    width: 1.5em;
    height: 0.1em;
    border-radius: 0.05em;
    background: rgba(255, 255, 255, 0.9);
  }

  .spark-switch input:checked + .track .star:nth-child(1) {
    animation: warp 0.4s linear infinite;
  }

  .spark-switch input:checked + .track .star:nth-child(2) {
    animation: warp 0.6s linear infinite 0.1s;
  }

  .spark-switch input:checked + .track .star:nth-child(3) {
    animation: warp 0.3s linear infinite 0.2s;
  }

  .spark-switch input:checked + .track .star:nth-child(4) {
    animation: warp 0.5s linear infinite 0.15s;
  }

  @keyframes drift {
    0% {
      transform: translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(-6em);
      opacity: 0;
    }
  }

  @keyframes warp {
    0% {
      transform: translateX(0) scaleX(1);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translateX(-6em) scaleX(2);
      opacity: 0;
    }
  }
`;
