import { css } from '@emotion/css'

const HeaderCSS = css({
	background: '#fff',
	textAlign: 'center',
	height: '40px'
})

export default () => {
	return (
		<div className={css(HeaderCSS)}>
			<p>Diablo Editor</p>
		</div>
	)
}
