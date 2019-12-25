import React from 'react'
import Head from 'next/head'
import { Button } from 'antd'
import Header from '../components/Header'
const Home = () => (
  <>
    <Header />
    <div>
      <Button>我是按钮</Button>
    </div>
  </>
)

export default Home