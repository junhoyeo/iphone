import { DivComponent } from '../types/html';
import { BasicDeviceProps, Device } from './Device';
import { DEVICE_BUTTON_WIDTH, DEVICE_HEIGHT, DEVICE_WIDTH } from './constants';

type TransformScaleProps = {
  transformScale?: number;
};
export type PhoneProps = BasicDeviceProps & TransformScaleProps;

export const Phone: React.FC<PhoneProps> = ({
  transformScale = 1,
  ...deviceProps
}) => {
  return (
    <Wrapper transformScale={transformScale}>
      <Device
        style={{
          transform: `scale(${transformScale})`,
          transformOrigin: 'top center',
        }}
        {...deviceProps}
      />
    </Wrapper>
  );
};

const Wrapper: DivComponent<TransformScaleProps> = ({
  transformScale,
  style,
  ...props
}) => (
  <div
    {...props}
    style={{
      width: transformScale * DEVICE_WIDTH + DEVICE_BUTTON_WIDTH * 2,
      height: transformScale * DEVICE_HEIGHT,
      display: 'flex',
      justifyContent: 'center',
    }}
  />
);
