import type { ReactNode, CSSProperties } from 'react'
import type { UserComponent } from '@craftjs/core'
import type { ResizeCallback } from 're-resizable'
import { useNode } from '@craftjs/core'
import React, { useRef } from 'react'
import { Resizable } from 're-resizable'

export interface MaterialContainerProps {
	children?: ReactNode
	style?: CSSProperties
	initialWidth: number
	initialHeight: number
}

export const MaterialContainer: UserComponent<MaterialContainerProps> = ({
	children,
	initialHeight,
	initialWidth,
	style
}) => {
	const resizableRef = useRef<any>(null)
	const {
		connectors: { connect },
		actions: { setProp }
	} = useNode((node) => {
		active: node.events.selected
	})

	const handleResize: ResizeCallback = (events, direction, ref, d) => {
		const { width, height } = ref.style
		setProp((props: any) => {
			props.width = width
			props.height = height
		}, 400)
	}

	return (
		<Resizable
			defaultSize={{ width: initialWidth, height: initialHeight }}
			bounds="parent"
			enable={{
				right: true,
				bottom: true
			}}
			style={{
				position: 'relative',
				...style
			}}
			onResize={handleResize}
			ref={(ref) => {
				if (ref) {
					resizableRef.current = ref
					connect(resizableRef.current.resizable)
				}
			}}>
			{children}
		</Resizable>
	)
}
MaterialContainer.categoryType = 'container'
MaterialContainer.componentType = 'Row'
