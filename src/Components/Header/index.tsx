import './index.less'
import LOGO_SVG from '@/assets/svg/logo.svg'
export default function Header() {
  return (
    <div className='mainView header'>
      <div className='mainContent'>
        <div className='headerView'>
          <img className='logo' src={LOGO_SVG}/>
        </div>
      </div>
      <div className='line'/>
    </div>
  )
}
