import type { UserComponent, UserComponentConfig } from '@craftjs/core'
import { useNode } from '@craftjs/core'
import * as React from 'react'

/**
 * 物料类型
 */

export type MaterialComponentType = UserComponent & {
	categoryType?: string
	componentType?: string
}

/**
 * 物料组件HOC 透传，usenode, ref
 * @param WrapComponent
 */
export function withMaterialNode<T = any>(
	WrapComponent: React.FunctionComponent<T>
) {
	return function (props?: any) {
		const {
			connectors: { connect, drag }
		} = useNode()
		return (
			<WrapComponent
				ref={(dom: HTMLElement) => connect(drag(dom))}
				{...props}
			/>
		)
	}
}

/**
 * 创建react 组件物料
 * @param component 物料组件
 * @param options 物料配置
 * @returns
 */
export function createReactMaterial<T>(
	component: MaterialComponentType,
	options: Partial<
		UserComponentConfig<T> & {
			categoryType?: string
			componentType?: string
		}
	>
) {
	component.craft = options
	component.categoryType = options.categoryType || 'base'
	component.componentType = options.componentType || ''
	return component as MaterialComponentType
}
