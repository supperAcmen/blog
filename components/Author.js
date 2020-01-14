import { Avatar, Divider, Tooltip, Tag } from 'antd'
import '../static/style/components/author.css'
import { post, fetch } from '../components/api'
const Author = () => {
  const github = <span>prompt github</span>
  const qq = <span>prompt qq</span>
  const wechat = <span>prompt wechat</span>
  return (
    <div className="author-div comm-box">
      <div>
        {/* <Avatar size={100} src="http://where.sijia2113.top/timg.jpg" /> */}
      </div>
      <div className="author-introduction">
        <div className="author-name">小徐</div>
        <div className="introduction-self">
          光头程序员，专注于WEB和移动前端开发。
        </div>
        <div>
          <Tag color="magenta">Vue.js</Tag>
          <Tag color="red">React.js</Tag>
          <Tag color="volcano">Type.js</Tag>
        </div>
        <Divider>社交账号</Divider>
        <Tooltip placement="top" title={github}>
          <Avatar size={28} icon="github" className="account" alt={'github'} />
        </Tooltip>
        <Tooltip placement="top" title={qq}>
          <Avatar size={28} icon="qq" className="account" alt={'qq'} />
        </Tooltip>
        <Tooltip placement="top" title={wechat}>
          <Avatar size={28} icon="wechat" className="account" alt={'wechat'} />
        </Tooltip>
      </div>
    </div>
  )
}

export default Author
