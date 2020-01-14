import React, { useEffect, useState, Component } from 'react'
// import { Row, Col, Icon, Breadcrumb, BackTop, Skeleton } from 'antd'
import { Row, Col, List, Icon, Affix, message } from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import '../static/style/pages/index.css'
import Author from '../components/Author'
import Advert from '../components/Advert'
import { fetch } from '../components/api'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css'

const Home = list => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize:false,
    xhtml: false,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }

  }); 
  const [mylist, setMylist] = useState(list.data)
  useEffect(() => {
    getList()
  }, [])
  const getList = async () => {
    return await fetch('getArticleList')
      .then(res => {
        if (res.code == 1) {
          setMylist(res.data)
        }
      })
      .catch(err => {
        message.error('接口不存在')
        console.log(err)
      })
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={18}>
          <List
            header={<div className="text">最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            loading={false}
            loadMore
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link
                    href={{ pathname: '/detailed', query: { id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <Icon type="calendar" /> {item.addTime}
                  </span>
                  <span>
                    <Icon type="folder" /> {item.typeName}
                  </span>
                  <span>
                    <Icon type="fire" /> {item.view_count}人
                  </span>
                </div>
                <div
                  className="list-context"
                  dangerouslySetInnerHTML={{
                    __html: item.introduce_html
                  }}></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={6}>
          <Author />
          <Affix offsetTop={60}>
            <Advert />
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
// 在调用 React 原生的所有生命周期函数之前，Next.js 会调用 getInitialProps 来获取数据，然后把获得数据作为 props 来启动 React 组件的原生生命周期过程。
// Home.getInitialProps = async () => {
//   const promise = new Promise((resolve, reject) => {

//     axios
//       .get(serverHttps.getInitialProps)
//       .then(res => {
//         // console.log(res)
//         resolve(res.data)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
//   return await promise
// }

export default Home
