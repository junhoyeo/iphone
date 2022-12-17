import {
  Phone,
  type DeviceFrameColor,
  type DynamicIslandSize,
} from '@junhoyeo/iphone';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1651833826115-7530e72ce504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80';
const FRAME_COLORS: { color: DeviceFrameColor; src: string }[] = [
  { color: 'purple', src: '/images/finish/deeppurple.jpg' },
  { color: 'gold', src: '/images/finish/gold.jpg' },
  { color: 'silver', src: '/images/finish/silver.jpg' },
  { color: 'black', src: '/images/finish/spaceblack.jpg' },
];

const HomePage = () => {
  const [frameColor, setFrameColor] = useState<DeviceFrameColor>('purple');
  // const [callState, setCallState] = useState<DynamicIslandSize>('default');
  const [musicPlayerState, setMusicPlayerState] =
    useState<DynamicIslandSize>('compact');

  const props = useMemo(
    () => ({
      default: 'compact',
      state: musicPlayerState,
      setState: setMusicPlayerState,
      onClick:
        musicPlayerState === 'compact'
          ? () => setMusicPlayerState('ultra')
          : () => setMusicPlayerState('compact'),
    }),
    [musicPlayerState],
  );

  return (
    <Container>
      <FrameColorList>
        {FRAME_COLORS.map(({ color, src }) => (
          <FrameColorRing
            key={color}
            style={{
              borderColor: frameColor === color ? '#3694FF' : '#26292B',
            }}
          >
            <FrameColorButton
              type="button"
              onClick={() => setFrameColor(color)}
              style={{ backgroundImage: `url(${src})` }}
            />
          </FrameColorRing>
        ))}
      </FrameColorList>
      <Phone
        frameColor={frameColor}
        transformScale={1}
        apps={[]}
        backgroundImage={BACKGROUND_IMAGE_URL}
        dynamicIslandProps={props}
      />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  margin: 64px 0;
`;

const FrameColorList = styled.ul`
  margin-bottom: 32px;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 8px;
`;
const FrameColorRing = styled.li`
  padding: 4px;
  border: 2px solid;
  border-radius: 50%;
  transition: border-color 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FrameColorButton = styled.button`
  width: 48px;
  height: 48px;

  border: 0;
  border-radius: 50%;

  cursor: pointer;
  background-size: 104%;
  background-size: calc(100% + 2px);
  background-position: center;
`;
