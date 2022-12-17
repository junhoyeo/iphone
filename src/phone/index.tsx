import { DivComponent } from '../types/html';
import { BasicDeviceProps, Device } from './Device';

export type PhoneProps = BasicDeviceProps & {
  transformScale: number;
};

export const Phone: React.FC<PhoneProps> = ({
  transformScale,
  ...deviceProps
}) => {
  return (
    <Wrapper>
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

const Wrapper: DivComponent = ({ style, ...props }) => (
  <div
    {...props}
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  />
);
