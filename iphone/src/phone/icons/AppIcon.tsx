import { getSvgPath } from 'figma-squircle';

import { DivComponent } from '../../types/html';
import { DEVICE_WIDTH } from '../constants';
import classes from './app-icon.module.scss';

export type AppIconProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: string;
  color?: string;
  accessories?: React.ReactNode;
  children?: React.ReactNode;
};

export const APP_ICON_SIZE = Math.floor(DEVICE_WIDTH * 0.156);
const svgPath = getSvgPath({
  width: APP_ICON_SIZE,
  height: APP_ICON_SIZE,
  cornerRadius: 16,
  cornerSmoothing: 0.8,
});

export const AppIcon: React.FC<AppIconProps> = ({
  children,
  icon,
  color,
  accessories,
  style,
  ...props
}) => {
  return (
    <Wrapper>
      <div
        className={classes.image}
        style={{
          ...style,
          width: APP_ICON_SIZE,
          height: APP_ICON_SIZE,
          clipPath: `path('${svgPath}')`,

          backgroundColor: color || 'white',
          backgroundImage: icon ? `url('${icon}')` : undefined,
          backgroundSize: 'cover',
        }}
        {...props}
      >
        {children}
      </div>
      {accessories}
    </Wrapper>
  );
};

const Wrapper: DivComponent = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      width: APP_ICON_SIZE,
      height: APP_ICON_SIZE,
      position: 'relative',
      transition: 'all 0.45s linear',
      zIndex: 0,
      ...style,
    }}
  />
);
