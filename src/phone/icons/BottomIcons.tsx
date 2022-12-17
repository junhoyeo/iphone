import React from 'react';

import { DEVICE_WIDTH } from '../constants';
import { AppIcon, AppIconProps } from './AppIcon';

const Phone = () => <PhoneIcon icon="/assets/phone/icons/bottom/phone.png" />;

const Mail = () => <MailIcon icon="/assets/phone/icons/bottom/mail.png" />;

const Safari = () => {
  return (
    <AppIcon>
      <img
        src="/assets/phone/icons/bottom/safari.png"
        style={{
          width: DEVICE_WIDTH * 0.156 * 0.88,
          height: DEVICE_WIDTH * 0.156 * 0.88,
        }}
      />
    </AppIcon>
  );
};

const Music = () => <MusicIcon icon="/assets/phone/icons/bottom/music.png" />;

const PhoneIcon: React.FC<AppIconProps> = ({ style, ...props }) => (
  <AppIcon
    {...props}
    style={{
      background: 'linear-gradient(to bottom, #89f384, #56ba43)',
      ...style,
    }}
  />
);
const MailIcon: React.FC<AppIconProps> = ({ style, ...props }) => (
  <AppIcon
    {...props}
    style={{
      background: 'linear-gradient(to bottom, #1d52ef, #14e6fd)',
      ...style,
    }}
  />
);
const MusicIcon: React.FC<AppIconProps> = ({ style, ...props }) => (
  <AppIcon
    {...props}
    style={{
      background: 'linear-gradient(to bottom, #fc5d74, #fa233c)',
      ...style,
    }}
  />
);

export const BottomIcons = {
  Phone,
  Mail,
  Safari,
  Music,
};
