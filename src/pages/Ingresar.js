import React, { useState } from 'react'
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

const {Title, Text} = Typography

export const Ingresar = () => {

  const history = useHistory()

  const [usuario] = useState(getUsuarioStorage())

  useHideMenu(false)

  const onFinish = (values) => {
    localStorage.setItem('agente', values.agente)
    localStorage.setItem('escritorio', values.escritorio)
    history.push('/escritorio')
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(usuario.agente && usuario.escritorio){
    return <Redirect to="/escritorio"/>
  }

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese Su nombre y numero de escritorio</Text>
      <Divider/>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: 'Ingrese el numero del escritorio',
            },
          ]}
        >
          <InputNumber min={1} max={99}/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
          >
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
