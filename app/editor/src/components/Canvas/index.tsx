import { css } from '@emotion/css'
import ReactFrame from 'react-frame-component'
import { Frame } from './Frame'
import { WindowFrame } from './windowFrame'
import { theme } from 'antd'
import { useEffect, useRef } from 'react'

const ifreameListenr = (event: any) => {
	const body = event.target.contentDocument?.body
	if (body) {
		body.style.margin = '0'
	}
}

export const Canvas = () => {
	const { token } = theme.useToken()
	const iframeRef = useRef<HTMLIFrameElement>(null)
	useEffect(() => {
		if (iframeRef.current) {
			iframeRef.current.addEventListener('load', ifreameListenr)
		}
		return () =>
			iframeRef.current?.removeEventListener('load', ifreameListenr)
	}, [])
	return (
		<div
			className={css({
				height: '100%',
				background: token.colorBgLayout,
				borderLeft: `1px solid ${token.colorBorderSecondary}`,
				borderRight: `1px solid ${token.colorBorderSecondary}`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
				padding: '40px 120px'
			})}>
			<ReactFrame
				id="FrameSanbox"
				ref={iframeRef}
				className={css({
					height: '100%',
					width: '100%',
					border: 'none',
					background: '#fff'
				})}>
				<div
					style={{
						boxSizing: 'border-box',
						height: '100vh',
						width: '100vw',
						padding: 12
					}}>
					<Frame />
				</div>
			</ReactFrame>
		</div>
	)
}
