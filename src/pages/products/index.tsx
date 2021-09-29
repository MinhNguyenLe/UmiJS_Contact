import React from 'react';

import { Row, Col, Space } from 'antd';
import LoginForm from '@/components/LoginForm';

import LayoutSider from '@/layouts/LayoutSider';
import '../index.less';

export default function Page() {
  return (
    <LayoutSider>
      <div className={'flex center'}>
        <div style={{ width: '50%' }}>
          <LoginForm />
        </div>
      </div>
    </LayoutSider>
  );
}
