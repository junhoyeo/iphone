import { DEVICE_WIDTH } from '../constants';
import { AppIcon, AppIconProps } from './AppIcon';
import classes from './grid-item.module.scss';

export interface GridItemProps extends AppIconProps {
  name?: string;
  notifications?: number;
  component?: React.ReactNode;
  dock?: boolean;
  onClick?: () => void;
}

export const GridItem: React.FC<GridItemProps> = ({
  icon,
  color,
  name,
  notifications,
  component,
  dock,
  onClick,
}) => {
  return (
    <div className={classes.wrapper} onClick={onClick}>
      {!!component ? (
        component
      ) : (
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
      )}
      {!dock && (
        <span
          className={classes.app_icon}
          style={{
            marginTop: DEVICE_WIDTH * 0.016,
            fontSize: DEVICE_WIDTH * 0.026,
          }}
        >
          {name || 'Unknown'}
        </span>
      )}
    </div>
  );
};
