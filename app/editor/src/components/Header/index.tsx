import {css} from '@emotion/css'


const HeaderCSS = css({
    background: '#fff',
    textAlign: 'center',
})

export default () => {
   return <div className={css(HeaderCSS)}>
      <h1>Diablo  Editor</h1>
   </div>
}