import { useRef } from 'react'
import {createPortal} from 'react-dom'
import {css} from '@emotion/css'

export interface IFrameRenderProps {
   children: JSX.Element,
   props?: Record<string, any>
}


const FrameRender = ({children, props}: IFrameRenderProps) => { 
    const ref = useRef<HTMLIFrameElement>(null)
    const container = ref.current?.contentDocument?.body
    return <iframe ref={ref} width='100%' height='100%' className={css({border: 'none'})}>
        {container && createPortal(children, container)}
    </iframe>
}

export default FrameRender