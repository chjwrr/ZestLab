
import './index.less'
import LOGO_SVG from '@/assets/svg/logo.svg'
export default function LoadingPage() {
  return(
    <div className={'loadingView'} style={{
      width:window.innerWidth,
      height:window.innerHeight
    }}>
      <img className='loadingIcon' src={LOGO_SVG}/>
    </div>
  )
}