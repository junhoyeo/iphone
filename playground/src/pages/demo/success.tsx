import { ResultPage } from 'antd-mobile';
import { AlipayCircleFill } from 'antd-mobile-icons';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
        <Card style={{ height: 64 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
        <Card style={{ height: 128, marginTop: 12 }}> </Card>
      </ResultPage>
    </ScreenContent>
  );
};

export default DemoSuccessPage;

const ScreenContent = styled.div`
  padding-top: 54px;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: var(--adm-color-primary);
`;
