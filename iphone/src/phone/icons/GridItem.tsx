import React from 'react';

import { DEVICE_WIDTH } from '../constants';
import { AppIcon, AppIconProps } from './AppIcon';
import classes from './grid-item.module.scss';

export interface GridItemProps extends AppIconProps {
  name?: string;
  notifications?: number;
  onClick?: () => void;
  component?: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  icon,
  color,
  name,
  notifications,
  onClick,
  component,
}) => {
  if (component) {
    return <>{component}</>;
  }

  return (
    <div className={classes.wrapper} onClick={onClick}>
      <AppIcon
        icon={icon}
        color={color}
        accessories={
          notifications && (
            <span className={classes.notification}>
              <span>{notifications}</span>
            </span>
          )
        }
      />
      <span
        className={classes.app_icon}
        style={{
          marginTop: DEVICE_WIDTH * 0.016,
          fontSize: DEVICE_WIDTH * 0.026,
        }}
      >
        {name || 'Unknown'}
      </span>
    </div>
  );
};
