import React, { useState, useLayoutEffect } from 'react';
import { Layout } from 'antd';
import LayoutSideMenu from 'Components/Layout/SideMenu';
import LayoutHeader from 'Components/Layout/Header';
import LayoutBreadcrumb from 'Components/Layout/Breadcrumb';
import LayoutFooter from 'Components/Layout/Footer';
import { checkAuthState } from 'Util/Auth';

const { Content } = Layout;

const LayoutUI = (props: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  useLayoutEffect(() => {
    checkAuthState();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSideMenu collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      <Layout>
        <LayoutHeader />
        <Content style={{ margin: '0 16px' }}>
          <LayoutBreadcrumb />
          {props.children}
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default LayoutUI;