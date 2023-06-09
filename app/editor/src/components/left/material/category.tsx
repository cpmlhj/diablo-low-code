import * as _materials_ from '@diablo/materials'
import { ContainerRender } from './cmp'
import { FC } from 'react'
import { Text } from '@diablo/materials'
const categoryMaterial = Object.keys(_materials_).map((material) => {
	return {
		key: material,
		component: _materials_[material as keyof typeof _materials_]
	}
})

console.log(categoryMaterial)

export const CategoryMaterial: FC = () => {
	return <div>123444</div>
}
