import React from 'react'
import '../public/style/components/header.css'
import { Row, Col, Menu, Icon, Affix } from 'antd'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <Affix onChange={affixed => console.log(affixed)}>
        <div className="header">
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
              <span className="header-logo">小徐技术栈</span>
              <span className="header-txt">专注前端开发,不断学习创新。</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
              <Menu mode="horizontal">
                <Menu.Item key="home">
                  <Link href={{ pathname: '/' }}>
                    <a>
                      <Icon type="home" />
                      首页
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="video">
                  <Link href={{ pathname: '/List' }}>
                    <a>
                      <Icon type="youtube" />
                      视频
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="life">
                  <Link href={{ pathname: '/List' }}>
                    <a>
                      <Icon type="smile" />
                      生活
                    </a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </div>
      </Affix>
    </>
  )
}

export default Header
