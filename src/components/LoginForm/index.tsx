import React, { useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';

import request from 'umi-request';

import { history } from 'umi';

import { useVerifyAccount } from '@/models/useVerifyAccoun';
export default function LoginForm() {
  const [err, setErr] = useState<string>('Please input your form');
  const [isRule, setRule] = useState<boolean>(true);

  const onFinish = (values: any) => {
    request
      .get('/api/users')
      .then(function (res) {
        const account = useVerifyAccount(res.users, values.username);
        if (account.error) {
          setRule(true);
          setErr(account.error);
        } else history.push('/products');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      onChange={() => {
        setErr('');
        setRule(false);
      }}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: isRule, message: err }]}
      >
        <Input
          onChange={() => {
            setErr('');
            setRule(false);
          }}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: isRule, message: err }]}
      >
        <Input.Password
          onChange={() => {
            setErr('');
            setRule(false);
          }}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
