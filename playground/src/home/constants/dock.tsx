/* eslint-disable @next/next/no-img-element */
import { AppIcon, DEVICE_WIDTH, type GridItemProps } from '@junhoyeo/iphone';
import React from 'react';

export const DOCK_IMAGE_URLS = {
  phone: '/assets/phone/icons/bottom/phone.png',
  mail: '/assets/phone/icons/bottom/mail.png',
  safari: '/assets/phone/icons/bottom/safari.png',
  music: '/assets/phone/icons/bottom/music.png',
};

const Safari: React.FC = () => {
  return (
    <AppIcon>
      <img
        alt=""
        src={DOCK_IMAGE_URLS.safari}
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
    icon: DOCK_IMAGE_URLS.phone,
    style: {
      background: 'linear-gradient(to bottom, #89f384, #56ba43)',
    },
  },
  {
    icon: DOCK_IMAGE_URLS.mail,
    style: {
      background: 'linear-gradient(to bottom, #1d52ef, #14e6fd)',
    },
  },
  {
    component: <Safari />,
  },
  {
    icon: DOCK_IMAGE_URLS.music,
    style: {
      background: 'linear-gradient(to bottom, #fc5d74, #fa233c)',
    },
  },
];
