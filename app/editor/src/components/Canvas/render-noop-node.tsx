import { useEditor, useNode } from '@craftjs/core'
import { FC } from 'react'

interface RenderNodeProps {
	render: React.ReactElement
}

export const RenderWrapperNode: FC<RenderNodeProps> = ({ render }) => {
	return <div>{render}</div>
}
