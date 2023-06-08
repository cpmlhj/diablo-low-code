

import * as React from 'react'
import EditorLayout from '@/components/layout/layout'
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
   return <EditorLayout/ >
} 