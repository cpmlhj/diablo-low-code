import { Element } from '@craftjs/core'
import { theme } from 'antd'
import React, { FC } from 'react'

interface ContainerProps {
	children: React.ReactElement
	style?: React.CSSProperties
}

export const ContainerRender: FC<ContainerProps> = ({ children, style }) => {
	const { token } = theme.useToken()
	return (
		<Element
			is={children}
			canvas
			initialWidth={'10%'}
			style={{
				background: token.colorPrimary,
				...style
			}}
		/>
	)
}
