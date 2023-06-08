import type {UserComponent, UserComponentConfig} from '@craftjs/core'
import type {FC} from 'react'
import {useNode} from '@craftjs/core'
import * as React from 'react'

/**
 * 物料类型
 */

export type MaterialComponentType = UserComponent

/**
 * 物料组件HOC 透传，usenode, ref
 * @param WrapComponent
 */
export function withMaterialNode<T = any>(WrapComponent: FC<T>) {
    return React.forwardRef(function (props)  {
       const {connectors: {connect, drag}} = useNode()
       return <WrapComponent ref={(self: HTMLElement) => connect(drag(self))} {...props} />
    })
}

/**
 * 创建react 组件物料
 * @param component 物料组件
 * @param options 物料配置
 * @returns 
 */
export function createReactMaterial<T>(component: MaterialComponentType, options: Partial<UserComponentConfig<T>>) {
    component.craft = options
    return component as MaterialComponentType
}