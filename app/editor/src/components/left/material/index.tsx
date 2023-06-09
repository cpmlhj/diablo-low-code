import { css } from '@emotion/css'
import { Space, Segmented, theme, Divider } from 'antd'
import { CategoryMaterial } from './category'

export const MaterialContainer = () => {
	const { token } = theme.useToken()
	return (
		<Space
			direction="vertical"
			className={css({ padding: token.paddingSM })}>
			<Segmented block options={['组件', '探索']} />
			<Divider className={css({ margin: '5px' })} />
			<CategoryMaterial />
		</Space>
	)
}
