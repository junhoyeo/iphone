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
      label: '肯德基（嘉里中心店）',
      value: '¥ 36.50',
      bold: true,
    },
    {
      label: '付款方式',
      value: '账户余额',
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
        title={<div style={{ fontSize: 15 }}>支付成功</div>}
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
        secondaryButtonText="辅助操作"
        primaryButtonText="主要操作"
        onSecondaryButtonClick={() => router.back()}
        onPrimaryButtonClick={() => router.back()}
      >
        <Card style={{ marginTop: 12 }}>
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
