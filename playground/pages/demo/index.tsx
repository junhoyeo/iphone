import {
  ActionSheet,
  AutoCenter,
  Button,
  Dialog,
  NavBar,
  Steps,
  Toast,
} from 'antd-mobile';
import { Action } from 'antd-mobile/es/components/action-sheet';
import { Step } from 'antd-mobile/es/components/steps/step';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { DemoBlock } from '@/home/components/antd/DemoBlock';

const DemoPage: NextPage = () => {
  const router = useRouter();
  const onBack = useCallback(() => {
    const event = new CustomEvent('iphone_app_close');
    window.parent.document.dispatchEvent(event);
  }, []);

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const handleRouteChange = (_url: string) => {
      setLoading(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ScreenContent>
      <style jsx global>{`
        html,
        body {
          background-color: #fafbfc !important;
        }
      `}</style>
      <div style={{ backgroundColor: 'white' }}>
        <NavBar onBack={onBack}>Title</NavBar>
      </div>

      <DemoBlock title="Content is automatically centered when it does not fill the entire width">
        <AutoCenter>laborum ullamco sint</AutoCenter>
      </DemoBlock>

      <DemoBlock title="Content maintains normal left alignment after reaching full width">
        <AutoCenter>laborum ullamco sint</AutoCenter>
      </DemoBlock>

      <DemoBlock title="Vertical step bar failure">
        <Steps direction="vertical">
          <Step
            title="Fill in organization information"
            status="finish"
            description="Completion time: 2020-12-01 12:30"
          />
          <Step
            title="Sign the organization"
            status="finish"
            description="Completion time: 2020-12-01 12:30"
          />
          <Step
            title="Link service area"
            status="finish"
            description="Completion time: 2020-12-01 12:30"
          />
          <Step title="Approval failed" status="error" />
        </Steps>
      </DemoBlock>

      <DemoBlock title="Command mode">
        <DemoActionSheetEvents />
      </DemoBlock>

      <Link href="/demo/success">
        <Button
          block
          color="primary"
          size="large"
          shape="rectangular"
          loading={loading}
        >
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

// Event handling
const DemoActionSheetEvents: React.FC = () => {
  const actions: Action[] = [
    { text: 'Copy', key: 'copy' },
    { text: 'Edit', key: 'edit' },
    {
      text: 'Save',
      key: 'save',
      onClick: async () => {
        const result = await Dialog.confirm({ content: 'Are you sure you want to save?' });
        if (result) {
          Toast.show('Save operation executed');
        }
      },
    },
  ];

  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Event handling</Button>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onAction={(action) => {
          if (action.key === 'edit' || action.key === 'copy') {
            Toast.show(`Clicked on ${action.text}`);
          }
        }}
        afterClose={() => {
          Toast.show('Action panel has been closed');
        }}
      />
    </>
  );
};