import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List, Card, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/bibidao.css'

import axios from 'axios'
// import servicePath from '../config/apiUrl'

const Bibidao = () => {
//   const [mylist, setList] = useState(data.list)

  useEffect(() => {})

  return (
    <>
      <Head>
        <title>大胖逼逼叨</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={18}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>大胖逼逼叨</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
                123
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={6}>
          <Author />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Bibidao
