import * as React from 'react'
import { LowCodeEditor } from '@/components/editor'
import '../initalize.css'

export interface TextProps {
	children?: React.ReactNode
}

// const TextView = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
//     return <div ref={ref}>
//             {props.children}
//     </div>
// })

// const Text = createReactMaterial(withMaterialNode<TextProps>(TextView), {
//    displayName: '文本属性'
// })

export default function HomePage() {
	return <LowCodeEditor enable />
}
