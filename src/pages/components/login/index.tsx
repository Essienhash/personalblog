import {UserOutlined, UnlockOutlined, AlipayOutlined, GithubOutlined, WechatOutlined} from '@ant-design/icons';
import React from 'react';
import {Input, Space, Button, Divider, Row} from 'antd';
import "./index.less"

const Login: React.FC = () => (


        <div className="login-box">
            <Space direction="vertical" className="login-model">
                <div className="login-header">
                    <div className="login-account">
                        <p>账号登陆</p>
                    </div>
                    <div className="login-phone">
                        <p>扫码登录</p>
                    </div>
                </div>
                <br/>
                <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined/>}/>
                <br/>
                <Input.Password size="large" placeholder="请输入用户密码" prefix={<UnlockOutlined/>}/>
                <br/>
                <Button type="primary" className="login-button">登录</Button>
                <br/>
                <Row>
                    <div className="register-text">
                        <p>没有账号？<a>立即注册</a></p>
                    </div>
                    <div className="password-retrieval">
                        <p><a>找回密码</a></p>
                    </div>
                </Row>
                <Divider plain><p className="divider">其他登录方式</p></Divider>
                <Row>
                    <div><WechatOutlined className="url-image"/></div>
                    <div><AlipayOutlined className="url-image"/></div>
                    <div><GithubOutlined className="url-image"/></div>
                </Row>
            </Space>
        </div>

);

export default Login;