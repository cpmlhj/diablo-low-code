import { css } from '@emotion/css'
import {
	CodepenOutlined,
	ApartmentOutlined,
	ApiOutlined,
	CloudSyncOutlined
} from '@ant-design/icons'
import { SiderRender } from '../sider'
import { MaterialContainer } from './material'
import { useState } from 'react'

export const Left = () => {
	const [currentSide, setSide] = useState<React.Key>(0)
	return (
		<div
			className={css({
				height: 'calc(100vh - 64px)',
				background: '#fff',
				display: 'grid',
				gridTemplateColumns: '50px 1fr'
			})}>
			<SiderRender
				handleChange={(value) => setSide(value)}
				value={currentSide}
				menus={[
					{
						value: 0,
						prototype: {
							toolTip: '组件',
							icon: <CodepenOutlined />
						}
					},
					{
						value: 1,
						prototype: {
							toolTip: '大纲树',
							icon: <ApartmentOutlined />
						}
					},
					{
						value: 2,
						prototype: {
							toolTip: '数据源',
							icon: <ApiOutlined />
						}
					}
					// {
					// 	value: 3,
					// 	prototype: {
					// 		toolTip: '组件',
					// 		icon: <CodepenOutlined />
					// 	}
					// }
				]}
			/>
			<MaterialContainer />
		</div>
	)
}
