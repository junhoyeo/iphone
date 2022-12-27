import {
  ActionSheet,
  AutoCenter,
  Button,
  Dialog,
  Footer,
  NavBar,
  Steps,
  Toast,
} from 'antd-mobile';
import { Action } from 'antd-mobile/es/components/action-sheet';
import { Step } from 'antd-mobile/es/components/steps/step';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { DemoBlock } from '@/home/components/antd/DemoBlock';

const DemoPage: NextPage = () => {
  const onBack = useCallback(
    () =>
      Toast.show({
        content: '点击了返回区域',
        duration: 1000,
      }),
    [],
  );

  return (
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
        <DemoActionSheetEvents />
      </DemoBlock>

      <Link href="/demo/success">
        <Button block color="primary" size="large">
          Next
        </Button>
      </Link>
    </ScreenContent>
  );
};

export default DemoPage;

const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
`;

// 事件处理
const DemoActionSheetEvents: React.FC = () => {
  const actions: Action[] = [
    { text: '复制', key: 'copy' },
    { text: '修改', key: 'edit' },
    {
      text: '保存',
      key: 'save',
      onClick: async () => {
        const result = await Dialog.confirm({ content: '确定要保存吗？' });
        if (result) {
          Toast.show('执行了保存操作');
        }
      },
    },
  ];

  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>事件处理</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onAction={(action) => {
          if (action.key === 'edit' || action.key === 'copy') {
            Toast.show(`点击了${action.text}`);
          }
        }}
        afterClose={() => {
          Toast.show('动作面板已关闭');
        }}
      />
    </>
  );
};
