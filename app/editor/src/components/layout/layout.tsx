import type {ReactNode} from 'react'
import {Layout, Space, Row, Col} from 'antd'
import  EditorHeader from '../Header'
import {Left} from '../left'
import {Right} from '../right'

import { FC } from 'react'
import {css} from '@emotion/css'

const {Header, Sider, Content} = Layout

interface EditorLayoutProps {
}




const defaultSiderLeftCSS = css({
   height: '92vh',
})

 const EditorLayout:FC<EditorLayoutProps> = () => {
    return <Space direction='vertical' className={css({ width: '100%'})} size={[0,48]}>
        <Layout className={css({height: '100vh', overflow: 'hidden'})}>
        <EditorHeader />
        <Row className={css({height: '100%'})}>
                <Col flex={'300px'}>
                  <Left />
                </Col>
                <Col flex={'auto'}>
                  <div>123</div>
                </Col>
                <Col flex={'300px'}>
                  <Right />
                </Col>
            </Row>
        </Layout>
    </Space>
}

export default EditorLayout