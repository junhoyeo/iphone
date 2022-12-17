import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { Analytics } from '@/utils/analytics';

import { DEVICE_WIDTH } from '../constants';
import { AppIcon, AppIconProps } from './AppIcon';
import classes from './grid-item.module.scss';

export interface GridItemProps extends AppIconProps {
  name?: string;
  notifications?: number;
  onClick?: () => void;
  component?: React.ReactNode;
  href?: string;
}

const GridItem: React.FC<GridItemProps> = ({
  icon,
  color,
  name,
  notifications,
  onClick,
  component,
  href,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  if (component) {
    return <>{component}</>;
  }

  return (
    <div
      className={classes.wrapper}
      onClick={() => {
        Analytics.logEvent('click_icon', { name: name ?? 'Unknown' });
        if (!!href) {
          if (href.startsWith('#')) {
            if (pathname === '/') {
              document.querySelector(href)?.scrollIntoView({
                behavior: 'smooth',
              });
            } else {
              router.push(`/${href}`);
            }
          } else {
            router.push(href);
          }
        }
        onClick?.();
      }}
    >
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

export default GridItem;
