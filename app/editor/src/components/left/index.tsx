import { css } from '@emotion/css'
import { SiderRender } from '../sider'

export const Left = () => {
	return (
		<div
			className={css({
				height: 'calc(100vh - 64px)',
				background: '#fff',
				display: 'grid',
				gridTemplateColumns: '50px 1fr'
			})}>
			<SiderRender menus={} />
			<div>456</div>
		</div>
	)
}
