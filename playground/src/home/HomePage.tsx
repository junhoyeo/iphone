import {
  FormatPainterOutlined,
  PhoneOutlined,
  RollbackOutlined,
} from '@ant-design/icons';
import {
  Phone,
  type DeviceFrameColor,
  type DynamicIslandSize,
} from '@junhoyeo/iphone';
import { Button, Popover } from 'antd-mobile';
import { PlayOutline } from 'antd-mobile-icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { useWindowSize } from '@/hooks/useWindowSize';

import { MetaHead } from './MetaHead';
import { DOCK } from './constants/dock';

const BACKGROUND_IMAGE_URL =
  'https://images.unsplash.com/photo-1651833826115-7530e72ce504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80';
const FRAME_COLORS: Record<DeviceFrameColor, { name: string; src: string }> = {
  purple: {
    name: 'Deep Purple',
    src: '/images/finish/deeppurple.jpg',
  },
  gold: {
    name: 'Gold',
    src: '/images/finish/gold.jpg',
  },
  silver: {
    name: 'Silver',
    src: '/images/finish/silver.jpg',
  },
  black: {
    name: 'Space Black',
    src: '/images/finish/spaceblack.jpg',
  },
};

type ActionKey = 'toggle-call' | 'reset';
const ACTIONS: { key: ActionKey; text: string; icon: React.ReactNode }[] = [
  { key: 'toggle-call', text: 'Toggle Call', icon: <PhoneOutlined /> },
  {
    key: 'reset',
    text: 'Back to Default',
    icon: <RollbackOutlined />,
  },
];

const HomePage = () => {
  const [frameColor, setFrameColor] = useState<DeviceFrameColor>('purple');
  const [dynamicIslandState, setDynamicIslandState] =
    useState<DynamicIslandSize>('default');

  const props = useMemo(
    () =>
      ({
        default: 'compact',
        state: dynamicIslandState,
        setState: setDynamicIslandState,
        onClick:
          dynamicIslandState === 'compact'
            ? () => setDynamicIslandState('ultra')
            : () => setDynamicIslandState('compact'),
      } as const),
    [dynamicIslandState],
  );

  const { width: windowWidth = 1980 } = useWindowSize();
  const transformScale = useMemo(() => {
    return windowWidth <= 500 ? 0.68 : 0.88;
  }, [windowWidth]);

  const containerRef = useRef<HTMLDivElement>(null);

  const frameColorActions = useMemo(() => {
    return Object.entries(FRAME_COLORS).map(([key, { name, src }]) => ({
      key,
      text: name,
      icon: (
        <FrameColorRing
          key={key}
          style={{
            borderColor: frameColor === key ? '#3694FF' : '#26292B',
          }}
        >
          <FrameColorButton style={{ backgroundImage: `url(${src})` }} />
        </FrameColorRing>
      ),
    }));
  }, [frameColor]);

  const onAction = useCallback((key?: ActionKey) => {
    if (!key) {
      return;
    }
    if (key === 'toggle-call') {
      setDynamicIslandState((prev) =>
        prev === 'default' || prev === 'compact' ? 'large' : 'default',
      );
    }
    if (key === 'reset') {
      setDynamicIslandState('default');
    }
  }, []);

  return (
    <Container>
      <MetaHead />

      <Phone
        appBarBrightness="light"
        frameColor={frameColor}
        transformScale={transformScale}
        apps={[]}
        dock={DOCK}
        dynamicIslandProps={props}
      >
        <AppBar />
        <Screen>
          <Iframe src="/demo" />
        </Screen>
      </Phone>

      <Toolbar ref={containerRef}>
        <Popover.Menu
          mode="dark"
          actions={frameColorActions}
          placement="top-end"
          onAction={(node) => setFrameColor(node.key as DeviceFrameColor)}
          trigger="click"
          getContainer={() => containerRef.current}
        >
          <ToolbarButton block shape="rounded">
            <FormatPainterOutlined style={{ fontSize: 24, marginRight: -2 }} />
          </ToolbarButton>
        </Popover.Menu>
        <Popover.Menu
          mode="dark"
          actions={ACTIONS}
          placement="top-end"
          onAction={(node) => onAction(node.key as ActionKey)}
          trigger="click"
          getContainer={() => containerRef.current}
        >
          <ToolbarButton color="primary" block shape="rounded">
            <PlayOutline fontSize={24} />
          </ToolbarButton>
        </Popover.Menu>
      </Toolbar>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  margin: 32px 0 100px;
  width: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FrameColorRing = styled.div`
  padding: 4px;
  border: 2px solid;
  border-radius: 50%;
  transition: border-color 0.2s ease;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FrameColorButton = styled.div`
  width: 20px;
  height: 20px;

  border: 0;
  border-radius: 50%;

  cursor: pointer;
  background-size: 104%;
  background-size: calc(100% + 2px);
  background-position: center;
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
`;
const AppBar = styled.div`
  width: 100%;
  height: 54px;
  background-color: white;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fafbfc;
`;

const Toolbar = styled.div`
  position: fixed;
  right: 28px;
  bottom: 32px;
  z-index: 100;

  display: flex;
  align-items: center;
  gap: 8px;
`;
const ToolbarButton = styled(Button)`
  box-sizing: border-box;
  width: 52px;
  height: 52px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  transition: opacity ease 0.15s;
  user-select: none;
  touch-action: none;

  border-radius: 50%;
  border: 0;
`;
