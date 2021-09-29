import React, { ReactChildren, ReactChild } from 'react';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import FooterApp from '@/components/FooterApp';
import HeaderApp from '@/components/HeaderApp';
import SiderApp from '@/components/SiderApp';

const LayoutSider = ({ children }: AuxProps) => {
  return (
    <>
      <Layout>
        <Sider>
          <SiderApp />
        </Sider>
        <Layout>
          <Header>
            <HeaderApp />
          </Header>
          <Content>{children}</Content>
          <Footer>
            <FooterApp />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutSider;
