import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb, Affix, message } from 'antd'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Link from 'next/link'
// import { fetch } from '../components/api'
import axios from 'axios'
import { serverHttps, apiUrl } from '../config/apiUrl'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const Lists = list => {
  const [myList, setMyList] = useState([list.data])
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })
  useEffect(() => {
    // console.log(list.data)
    setMyList(list.data)
  })

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
            dataSource={myList}
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
                    __html: item.introduce_html}
                  }></div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={6}>
          <Affix offsetTop={60}>
            <Author />
            <Advert />
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
// 在调用 React 原生的所有生命周期函数之前，Next.js 会调用 getInitialProps 来获取数据，然后把获得数据作为 props 来启动 React 组件的原生生命周期过程。
Lists.getInitialProps = async (context) => {
  let id = parseInt(context.query.id)
  // console.log(id)
  const promise = new Promise(resolve => {
    if (id) {
      axios.get(serverHttps.getListById + id).then(res => {
        // console.log(res.data.data)
        resolve(res.data)
      })
    } else {
      // console.log('error.....')
      resolve({ article_content: 'Id Error' })
    }
  })
  return await promise
}

export default Lists
