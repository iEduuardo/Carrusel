import React from "react";
import { Button, Form, Input, Col, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './login.scss';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function Login() {
    return (
      <div className="login-container">
        <div className="form-container">
          <Form
            name="login"
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Ingrese usuario' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
              </Form.Item>
  
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Ingrese contraseña' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
  
              <Form.Item
                // wrapperCol={{
                //   offset: 8,
                //   span: 16,
                // }}
              >
                <Row justify="center" gutter={16}>
                  <Col>
                    <Button type="dashed" href="/home">
                      Regresar
                    </Button>
                  </Col>
                  <Col>
                    <Button type="primary" htmlType="submit">
                      Entrar
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
  
export default Login;