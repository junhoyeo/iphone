import createGlobe from 'cobe';
import DynamicIsland from 'dynamic-island/src/DynamicIsland';
import { DynamicIslandPhoneCall } from 'dynamic-island/src/PhoneCall';
import { DynamicIslandSize } from 'dynamic-island/types';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { shadow } from '@/styles/shadow';

import Pagination from './Pagination';
import Symbols from './Symbols';
import { DEVICE_HEIGHT, DEVICE_WIDTH, INSTALLED_APPS } from './constants';
import { APP_ICON_SIZE } from './icons/AppIcon';
import BottomIcons from './icons/BottomIcons';
import GridItem from './icons/GridItem';

const APP_CELL_SIZE = Math.floor(DEVICE_WIDTH * 0.156 + 22.6);
const APP_CELL_GAP = APP_CELL_SIZE - APP_ICON_SIZE;
const SCREEN_CONTENT_WIDTH = Math.floor(APP_CELL_SIZE * 4);

interface IDevice {
  style?: React.CSSProperties;
}

const Device: React.FC<IDevice> = ({ style }) => {
  const currentTime = useMemo(() => {
    const date = new Date();
    return `${date.getHours() || 12}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }, []);

  const [callState, setCallState] = useState<DynamicIslandSize>('default');

  const deviceFrameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current || !deviceFrameRef.current) {
      return;
    }

    const globeSize = parseInt(
      window.getComputedStyle(deviceFrameRef.current).width,
    );

    const southKorea: [number, number] = [37.5326, 127.024612];
    const maxPhi = 6.28;
    const greenwichPhi = 4.38;

    let phi = (maxPhi / 180) * southKorea[1] + greenwichPhi;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: globeSize * 2,
      height: globeSize * 2,
      phi,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.25,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.12, 0.12, 0.12],
      markerColor: [1, 1, 1],
      glowColor: [0.24, 0.24, 0.24],
      markers: [{ location: southKorea, size: 0.05 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'));

    window.onbeforeunload = () => {
      if (canvasRef.current) {
        canvasRef.current.style.transition = 'opacity 0.2s ease';
        canvasRef.current.style.opacity = '0';
      }
    };

    return () => {
      globe.destroy();
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCallState(callState === 'default' ? 'large' : 'default');
    }, 3_000);
  }, []);

  return (
    <>
      <div className="phone device device-iphone-14-pro" style={style}>
        <div ref={deviceFrameRef} className="device-frame">
          <div className="screen device-screen">
            <div className="top-container">
              <span className="clock">{currentTime}</span>

              <div className="dynamic-island-container absolute h-[35px] top-0 left-0 right-0 w-full flex items-center">
                <DynamicIsland
                  id="phone-call"
                  default="default"
                  state={callState}
                  setState={setCallState}
                  onClick={
                    callState === 'default'
                      ? () => setCallState('large')
                      : () => setCallState('default')
                  }
                >
                  <DynamicIslandPhoneCall size={callState} />
                </DynamicIsland>
              </div>

              <Symbols style={{ marginRight: -APP_CELL_GAP / 4 }} />
            </div>
            <div className="grid-wrapper">
              <div className="grid-container">
                {INSTALLED_APPS.map((appItem, appIndex) => (
                  <GridItem key={appIndex} {...appItem} />
                ))}
              </div>
            </div>
            <div className="bottom-wrapper">
              <Pagination />
              <div className="bottom-container">
                <BottomIcons.Phone />
                <BottomIcons.Mail />
                <BottomIcons.Safari />
                <BottomIcons.Music />
              </div>
            </div>

            <canvas className="globe-canvas" ref={canvasRef} />
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
      <style jsx>{`
        .phone {
          border-radius: 68px;
          transition: all 0.2s ease;

          box-shadow: ${shadow('to-top')};
        }

        @media screen and (max-width: 600px) {
          .phone {
            box-shadow: ${shadow('to-bottom')};
          }
        }

        .screen {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          z-index: 0;

          && {
            background-color: #060606;
          }

          background-size: cover;
          background-repeat: no-repeat;
          background-image: url('https://images.unsplash.com/photo-1651833826115-7530e72ce504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80');
        }

        .top-container {
          margin: 0 auto;
          width: ${SCREEN_CONTENT_WIDTH - APP_CELL_GAP}px;
          height: 35px;

          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;

          top: 9px;
          left: 5%;
          right: 5%;
        }

        .device-iphone-14-pro .device-sensors::before,
        .device-iphone-14-pro .device-sensors::after {
          pointer-events: none;
        }

        .grid-wrapper {
          margin: 0 auto;
          margin-top: ${DEVICE_HEIGHT * 0.0875}px;
          display: flex;
          flex: 1;
        }

        .grid-container {
          height: 100%;
          width: ${SCREEN_CONTENT_WIDTH}px;
          display: grid;
          grid-template-columns: repeat(auto-fill, ${APP_CELL_SIZE}px);
          grid-template-rows: repeat(
            auto-fill,
            ${DEVICE_WIDTH * (0.016 + 0.15) + DEVICE_WIDTH * (0.12 * 0.695)}px
          );
        }

        .bottom-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .bottom-container {
          width: 94.6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          margin-bottom: 16px;
          border-radius: 32px;
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
          background: inherit;
          overflow: hidden;
          height: ${DEVICE_HEIGHT * 0.11}px;
          padding: ${0.045 * DEVICE_WIDTH}px ${0.047 * DEVICE_WIDTH}px;
          background-image: url('/assets/phone/background.jpg');
        }

        .bottom-container::before {
          content: '';
          position: absolute;
          background: inherit;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
          filter: blur(24px);
          margin: -20px;
          background-size: cover;
          opacity: 0.5;
          background-position-y: bottom;
        }

        .clock {
          font-size: 17px;
          font-weight: bold;
          height: fit-content;
        }

        .globe-canvas {
          width: 428px;
          height: 428px;

          opacity: 0;
          transition: opacity 1s ease;

          position: absolute;
          top: 28%;
          left: -20%;
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default Device;
