import {
  Phone,
  type DeviceFrameColor,
  type DynamicIslandSize,
} from '@junhoyeo/iphone';
import {
  ActionSheet,
  AutoCenter,
  Button,
  NavBar,
  Steps,
  Toast,
} from 'antd-mobile';
import {
  Action,
  ActionSheetShowHandler,
} from 'antd-mobile/es/components/action-sheet';
import { Step } from 'antd-mobile/es/components/steps/step';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { MetaHead } from './MetaHead';
import { DemoBlock } from './components/antd/DemoBlock';
import { DOCK } from './constants/dock';

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

  const onBack = useCallback(
    () =>
      Toast.show({
        content: '点击了返回区域',
        duration: 1000,
      }),
    [],
  );

  return (
    <Container>
      <MetaHead />

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
      <DynamicIslandToolbar>
        <DynamicIslandToolbarButton
          type="button"
          onClick={() =>
            setDynamicIslandState((prev) =>
              prev === 'default' || prev === 'compact' ? 'large' : 'compact',
            )
          }
        >
          Toggle Call
        </DynamicIslandToolbarButton>
        <DynamicIslandToolbarButton
          type="button"
          onClick={() => setDynamicIslandState('default')}
        >
          Back to Default
        </DynamicIslandToolbarButton>
      </DynamicIslandToolbar>
      <Phone
        appBarBrightness="light"
        frameColor={frameColor}
        transformScale={1}
        apps={[]}
        dock={DOCK}
        backgroundImage={BACKGROUND_IMAGE_URL}
        dynamicIslandProps={props}
      >
        <Screen>
          <ScreenContent>
            <div style={{ backgroundColor: 'white' }}>
              <NavBar onBack={onBack}>标题</NavBar>
            </div>

            <DemoBlock title="内容不够整行宽度时自动居中">
              <AutoCenter>laborum ullamco sint</AutoCenter>
            </DemoBlock>

            <DemoBlock title="内容达到满宽后保持正常的左对齐">
              <AutoCenter>laborum ullamco sint</AutoCenter>
            </DemoBlock>

            <DemoBlock title="纵向步骤条失败">
              <Steps direction="vertical">
                <Step
                  title="填写机构信息"
                  status="finish"
                  description="完成时间：2020-12-01 12:30"
                />
                <Step
                  title="签约机构"
                  status="finish"
                  description="完成时间：2020-12-01 12:30"
                />
                <Step
                  title="关联服务区"
                  status="finish"
                  description="完成时间：2020-12-01 12:30"
                />
                <Step title="审批失败" status="error" />
              </Steps>
            </DemoBlock>

            <DemoBlock title="指令式">
              <Imperative />
            </DemoBlock>
          </ScreenContent>
        </Screen>
      </Phone>
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

const DynamicIslandToolbar = styled.div`
  margin-bottom: 32px;
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 8px;
`;
const DynamicIslandToolbarButton = styled.button`
  padding: 8px 16px;
  border: 0;
  border-radius: 8px;
  background-color: #26292b;
  color: #fff;
  cursor: pointer;
`;

const Screen = styled.div`
  padding-top: 54px;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
  display: flex;
  flex-direction: column;
`;

// 指令式
const Imperative: React.FC = () => {
  const handler = useRef<ActionSheetShowHandler>();
  const actions: Action[] = [
    {
      text: '复制',
      key: 'copy',
    },
    {
      text: '修改',
      key: 'edit',
      onClick: () => {
        handler.current?.close();
      },
    },
  ];

  return (
    <Button
      onClick={() => {
        handler.current = ActionSheet.show({
          actions,
          onClose: () => {
            Toast.show('动作面板关闭');
          },
        });
      }}
    >
      显示
    </Button>
  );
};
