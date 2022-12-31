import React, { useMemo, useRef } from 'react';

import DynamicIsland, {
  DynamicIslandProps,
} from '../../dynamic-island/src/DynamicIsland';
import { DynamicIslandMusicPlayer } from '../../dynamic-island/src/MusicPlayer';
import { DynamicIslandPhoneCall } from '../../dynamic-island/src/PhoneCall';
import { shadow } from '../utils/shadow';
import { Pagination } from './Pagination';
import { AppBarBrightness, Symbols } from './Symbols';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './constants';
import classes from './device.module.scss';
import { APP_ICON_SIZE } from './icons/AppIcon';
import { GridItem, GridItemProps } from './icons/GridItem';

const APP_CELL_SIZE = Math.floor(DEVICE_WIDTH * 0.156 + 22.6);
const APP_CELL_GAP = APP_CELL_SIZE - APP_ICON_SIZE;
const SCREEN_CONTENT_WIDTH = Math.floor(APP_CELL_SIZE * 4);

export type DeviceFrameColor = 'purple' | 'silver' | 'black' | 'gold';
export type BasicDeviceProps = {
  appBarBrightness: AppBarBrightness;
  frameColor: DeviceFrameColor;
  apps: GridItemProps[];
  dock: GridItemProps[];
  backgroundImage?: string;
  dynamicIslandProps: Omit<DynamicIslandProps, 'children'>;
  children?: React.ReactNode;
};
type DeviceProps = BasicDeviceProps & {
  style?: React.CSSProperties;
};

export const Device: React.FC<DeviceProps> = ({
  appBarBrightness = 'light',
  style,
  frameColor,
  apps,
  dock,
  backgroundImage,
  dynamicIslandProps,
  children,
}) => {
  const deviceFrameColorClass =
    frameColor === 'purple' ? undefined : `device-${frameColor}`;

  const currentTime = useMemo(() => {
    const date = new Date();
    return `${date.getHours() || 12}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }, []);

  const deviceFrameRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className={`${classes.phone} device ${
          deviceFrameColorClass || ''
        } device-iphone-14-pro`}
        style={{ ...style, boxShadow: shadow('to-top') }}
      >
        <div ref={deviceFrameRef} className="device-frame">
          <div
            className={`${classes.screen} device-screen`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div
              className={classes.topContainer}
              style={{ width: SCREEN_CONTENT_WIDTH - APP_CELL_GAP }}
            >
              <span
                className={`${classes.clock} font-sans`}
                style={{
                  color: appBarBrightness === 'light' ? 'black' : 'undefined',
                }}
              >
                {currentTime}
              </span>

              <div className="dynamic-island-container absolute h-[35px] top-0 left-0 right-0 w-full flex items-center">
                <DynamicIsland {...dynamicIslandProps}>
                  {(dynamicIslandProps.state === 'default' ||
                    dynamicIslandProps.state == 'large') && (
                    <DynamicIslandPhoneCall size={dynamicIslandProps.state} />
                  )}
                  {(dynamicIslandProps.state === 'compact' ||
                    dynamicIslandProps.state === 'ultra') && (
                    <DynamicIslandMusicPlayer size={dynamicIslandProps.state} />
                  )}
                </DynamicIsland>
              </div>

              <Symbols
                appBarBrightness={appBarBrightness}
                style={{ marginRight: -APP_CELL_GAP / 4 }}
              />
            </div>

            {!children ? (
              <>
                <div
                  className={classes.gridWrapper}
                  style={{ marginTop: DEVICE_HEIGHT * 0.0875 }}
                >
                  <div
                    className={classes.gridContainer}
                    style={{
                      width: SCREEN_CONTENT_WIDTH,
                      gridTemplateColumns: `repeat(auto-fill, ${APP_CELL_SIZE}px)`,
                      gridTemplateRows: `repeat(auto-fill, ${
                        DEVICE_WIDTH * (0.016 + 0.15) +
                        DEVICE_WIDTH * (0.12 * 0.695)
                      }px)`,
                    }}
                  >
                    {apps.map((appItem, appIndex) => (
                      <GridItem key={appIndex} {...appItem} />
                    ))}
                  </div>
                </div>
                <div className={classes.dockWrapper}>
                  <Pagination />
                  <div
                    className={classes.dockContainer}
                    style={{
                      height: DEVICE_HEIGHT * 0.11,
                      padding: `${0.045 * DEVICE_WIDTH}px ${
                        0.047 * DEVICE_WIDTH
                      }px`,
                    }}
                  >
                    <div
                      className={classes.dockBlur}
                      style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    {dock.slice(0, 4).map((appItem, appIndex) => (
                      <GridItem dock key={appIndex} {...appItem} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              children
            )}
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </>
  );
};
