import React, { useEffect, useState } from 'react'
import { Row, Col, List, Icon, Affix } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { post, fetch } from '../components/api'
import '../public/style/pages/index.css'
import Author from '../components/Author'
import Advert from '../components/Advert'

const Home = () => {
  const getRight = async () => {
    // let data = {};
    fetch('/index')
      .then(res => {
        console.log(res)
        // return res
      })
      .catch(err => {
        console.log(err)
        // return err
      })
  }

  useEffect(() => {
    fetch('/index')
      .then(res => {
        console.log(res)
        // return res
      })
      .catch(err => {
        console.log(err)
        // return err
      })
  }, [])
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={18}>
          左侧
        </Col>
        <Col
          // onClick={getRight}
          className="comm-right"
          xs={0}
          sm={0}
          md={7}
          lg={5}
          xl={6}>
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

export default Home
