import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb, Affix } from 'antd'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Link from 'next/link'

const Lists = () => {
  const [mylist, setMylist] = useState([])

  useEffect(() => {
    // console.log(111)
  }, [])

  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={18}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            // header={<div className="text">bokeshou </div>}
            itemLayout="vertical"
            dataSource={mylist}
            loading={false}
            loadMore
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: { id: 1 } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <Icon type="calendar" /> {item.time}
                  </span>
                  <span>
                    <Icon type="folder" /> {item.tag}
                  </span>
                  <span>
                    <Icon type="fire" /> {item.heat}人
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={6}>
          <Affix offsetTop={50}>
            <Author />
            <Advert />
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Lists
