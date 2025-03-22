import { ResultPage, Steps } from 'antd-mobile';
import { AlipayCircleFill } from 'antd-mobile-icons';
import { Step } from 'antd-mobile/es/components/steps/step';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { DemoBlock } from '@/home/components/antd/DemoBlock';

const DemoSuccessPage: NextPage = () => {
  const router = useRouter();

  const details = [
    {
      label: 'KFC (Kerry Center Store)',
      value: '¥ 36.50',
      bold: true,
    },
    {
      label: 'Payment Method',
      value: 'Account Balance',
    },
  ];
  const Card = ResultPage.Card;

  return (
    <ScreenContent>
      <style jsx global>{`
        html,
        body {
          background-color: #fafbfc !important;
        }
      `}</style>
      <ResultPage
        status="waiting"
        title={<div style={{ fontSize: 15 }}>Payment Successful</div>}
        description={
          <>
            <span style={{ fontSize: 32, color: '#ffffff', marginRight: 4 }}>
              ¥
            </span>
            <span style={{ fontSize: 48, color: '#ffffff' }}>36.50</span>
          </>
        }
        icon={<AlipayCircleFill />}
        details={details}
        secondaryButtonText="Secondary Action"
        primaryButtonText="Primary Action"
        onSecondaryButtonClick={() => router.back()}
        onPrimaryButtonClick={() => router.back()}
      >
        <Card style={{ marginTop: 12 }}>
          <DemoBlock title="Vertical Step Bar Failure">
            <Steps direction="vertical">
              <Step
                title="Fill in Organization Information"
                status="finish"
                description="Completion Time: 2020-12-01 12:30"
              />
              <Step
                title="Sign the Organization"
                status="finish"
                description="Completion Time: 2020-12-01 12:30"
              />
              <Step
                title="Link Service Area"
                status="finish"
                description="Completion Time: 2020-12-01 12:30"
              />
              <Step title="Approval Failed" status="error" />
            </Steps>
          </DemoBlock>
        </Card>
        <Card style={{ height: 64 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
      </ResultPage>
    </ScreenContent>
  );
};

export default DemoSuccessPage;

const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: #fafbfc;
`;