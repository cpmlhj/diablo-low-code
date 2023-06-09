import { Frame as EditorFrams, Element } from '@craftjs/core'
import { MaterialContainer, Text } from '@diablo/materials'
import { theme } from 'antd'
import { css } from '@emotion/css'

export enum DEVICE {
	PC,
	MOBILE,
	IPAD
}

const deviceViewPort = {
	[DEVICE.PC]: '100%',
	[DEVICE.IPAD]: '800px',
	[DEVICE.MOBILE]: '375px'
}
export const Frame = () => {
	const { token } = theme.useToken()
	return (
		<div
			id="__DiabloViewPort__"
			className={css({
				background: token.colorBgContainer,
				width: deviceViewPort[0],
				height: '100%'
			})}>
			<EditorFrams>
				<Element
					is={MaterialContainer as any}
					canvas
					style={{
						background: token.colorBgBase,
						height: '100%'
					}}>
					<Text>更好的体验</Text>
				</Element>
			</EditorFrams>
		</div>
	)
}
