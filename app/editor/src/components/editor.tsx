import { Editor } from '@craftjs/core'
import EditorLayout from './layout/layout'
import { MaterialContainer, Text } from '@diablo/materials'
import { RenderWrapperNode } from './Canvas/render-noop-node'
import { FC } from 'react'

export interface LowCodeEditorProps {
	enable?: boolean
	[key: string]: any
}

export const LowCodeEditor: FC<LowCodeEditorProps> = ({
	enable,
	...resetProps
}) => {
	return (
		<Editor
			enabled={enable}
			// onRender={RenderWrapperNode}
			resolver={{ MaterialContainer, Text }}>
			<EditorLayout />
		</Editor>
	)
}
