import React, { useEffect } from 'react';

import { Row, Col, Space } from 'antd';

import LayoutSider from '@/layouts/LayoutSider';
import '../index.less';

import ItemProduct from '@/components/ItemProduct';

import { history } from 'umi';
import request from 'umi-request';

export default function Page() {
  useEffect(() => {
    request
      .get('/api/products/BCS')
      .then(function (res) {})
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <LayoutSider>
      <div className={'flex center'}>
        <ItemProduct />
      </div>
    </LayoutSider>
  );
}
