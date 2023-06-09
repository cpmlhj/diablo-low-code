import { createReactMaterial, withMaterialNode } from '@diablo/core'
import { Typography } from 'antd'
import React from 'react'

export const Text = createReactMaterial(
	withMaterialNode<React.ComponentProps<typeof Typography.Text>>(
		Typography.Text
	),
	{
		displayName: '文本'
	}
)
