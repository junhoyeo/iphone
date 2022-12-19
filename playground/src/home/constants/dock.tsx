/* eslint-disable @next/next/no-img-element */
import { AppIcon, DEVICE_WIDTH, type GridItemProps } from '@junhoyeo/iphone';
import React from 'react';

const Safari: React.FC = () => {
  return (
    <AppIcon>
      <img
        alt=""
        src="/assets/phone/icons/bottom/safari.png"
        style={{
          width: DEVICE_WIDTH * 0.156 * 0.88,
          height: DEVICE_WIDTH * 0.156 * 0.88,
        }}
      />
    </AppIcon>
  );
};

export const DOCK: GridItemProps[] = [
  {
    icon: '/assets/phone/icons/bottom/phone.png',
    style: {
      background: 'linear-gradient(to bottom, #89f384, #56ba43)',
    },
  },
  {
    icon: '/assets/phone/icons/bottom/mail.png',
    style: {
      background: 'linear-gradient(to bottom, #1d52ef, #14e6fd)',
    },
  },
  {
    component: <Safari />,
  },
  {
    icon: '/assets/phone/icons/bottom/music.png',
    style: {
      background: 'linear-gradient(to bottom, #fc5d74, #fa233c)',
    },
  },
];
