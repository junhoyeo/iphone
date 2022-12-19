import 'tailwindcss/tailwind.css';
import './styles/devices.css';

export { Phone, type PhoneProps } from './phone';
export { DEVICE_WIDTH, DEVICE_HEIGHT } from './phone/constants';
export { type DeviceFrameColor } from './phone/Device';

export {
  AppIcon,
  APP_ICON_SIZE,
  type AppIconProps,
} from './phone/icons/AppIcon';
export { GridItem, type GridItemProps } from './phone/icons/GridItem';

export { type DynamicIslandSize } from '../dynamic-island/types';
