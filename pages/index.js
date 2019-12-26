import React from 'react'
import { Row, Col } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/nav'
import { get, post } from "../components/api";
import serve from "../config/serve";

const Home = () => {
  const getRight = () => {

    let data = {};
    data.data = '{"act":"classifyList"}';
    post("", data)
      .then(res => {
        if (res.code == 1) {
          this.classify_list = res.data;
          this.classId = res.data[0].id;
          this.getgoodsList();
        } else {
          // this.$my_message(res.msg, "error");
        }
      })
      .catch(err => {
        console.log(err)
        // this.$my_message("数据接收失败,请稍后重试", "error");
      });
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          左侧
        </Col>
        <Col onClick={getRight} className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Home