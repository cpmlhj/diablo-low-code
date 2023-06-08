import type { ButtonProps } from 'antd'
import { FC } from 'react'
import { Tooltip, Space, theme, Button } from 'antd'
import { css } from '@emotion/css'

export interface SiderItemProps extends ButtonProps {
	actived?: boolean
	toolTip?: string
}

export interface SiderProps {
	value: React.Key
	menus: {
		prototype: SiderItemProps
		value: SiderProps['value']
	}[]
	handleChange: (value: SiderProps['value']) => void
}

export const SiderItem: FC<SiderItemProps> = ({
	toolTip,
	actived,
	...restProps
}) => {
	return (
		<Tooltip title={toolTip}>
			<Button {...restProps} type={(actived && 'primary') || 'text'} />
		</Tooltip>
	)
}

export const SiderRender: FC<SiderProps> = ({ value, menus, handleChange }) => {
	const { token } = theme.useToken()
	return (
		<div
			className={css({
				display: 'flex',
				justifyContent: 'space-around',
				padding: token.paddingSM
			})}>
			<Space size="middle" direction="vertical">
				{menus.map((menu) => (
					<SiderItem
						actived={menu.value === value}
						key={menu.value}
						{...menu.prototype}
						onClick={() => handleChange && handleChange(menu.value)}
					/>
				))}
			</Space>
		</div>
	)
}
