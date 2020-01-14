import React, { useEffect, useState } from 'react'
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon, Affix, message } from 'antd'
import Link from 'next/link'
import { fetch } from '../components/api'
import Router from 'next/router'

const Header = () => {
  const [navArray, setNavArray] = useState([])

  const getTypeInfo = async () => {
    return await fetch('getTypeInfo')
      .then(res => {
        setNavArray(res.data)
      })
      .catch(err => {
        message.error('接口不存在')
        // console.log(err)
      })
  }
  useEffect(() => {
    getTypeInfo()
  }, [])
  // 跳转
  const handleClick = e => {
    if (e.key == 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
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
              <Menu mode="horizontal" onClick={handleClick}>
                <Menu.Item key="0">
                  <Link href={{ pathname: '/' }}>
                    <a>
                      <Icon type="home" />
                      博客首页
                    </a>
                  </Link>
                </Menu.Item>
                {navArray.map(item => {
                  return (
                    <Menu.Item key={item.Id}>
                      <Icon type={item.icon} />
                      {item.typeName}
                    </Menu.Item>
                  )
                })}
                {/* <Menu.Item key="video">
                  <Link href={{ pathname: '/List' }}>
                    <a>
                      <Icon type="youtube" />
                      视频
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="life">
                  <Link href={{ pathname: '/bibidao' }}>
                    <a>
                      <Icon type="smile" />
                      生活
                    </a>
                  </Link>
                </Menu.Item> */}
              </Menu>
            </Col>
          </Row>
        </div>
      </Affix>
    </>
  )
}

export default Header
