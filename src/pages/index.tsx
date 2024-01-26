import './index.less'
import WAHTICON_SVG from '@/assets/svg/Whaticon.svg'
import WAYICON_SVG from '@/assets/svg/Whyicon.svg'
import WHOICON_SVG from '@/assets/svg/Whoicon.svg'
import WHENICON_SVG from '@/assets/svg/Whenicon.svg'
import WHEREICON_SVG from '@/assets/svg/Whereicon.svg'
import PLUSICON_SVG from '@/assets/svg/Plusicon.svg'
import SUBICON_SVG from '@/assets/svg/Subicon.svg'
import TELEGRAM_SVG from '@/assets/svg/telegram.svg'
import COPYICON_SVG from '@/assets/svg/copyicon.svg'

import {useSpring,animated} from 'react-spring'
import { useState } from 'react'
import { motion } from "framer-motion"

//@ts-ignore
import {ReactHeight} from 'react-height';


export default function HomePage() {
  return (
    <div className='mainView'>
      <div className='mainContent'>
        <Top/>
        <About/>
        <Products/>
        <Latest/>
        <Chat/>
      </div>
    </div>
  );
}
function Top(){
  return <div className='column topView'>
    <div className='rowBetween topTopView'>
      <div className='ZestLab'>ZestLab</div>
      <div className='column topRightView'>
        <div className='ZestLabDes'>We believe that with the power of Web3, we can achieve a global shift towards sustainable living. We encourage everyone to join us in creating a more environmentally friendly, equitable, and sustainable future.</div>
        <div className='row'>
          <div className='contactButton'>Twitter</div>
          <div className='contactButton'>Medium</div>
          <div className='contactButton'>Telegram</div>
        </div>
      </div>
    </div>
    <div className='topIconView'>
      <img className='topIconSubView' src='/images/topicon.png'/>
      <img className='topIconSubView' src='/images/toptem.png'/>
      <img className='topIconSubView' src='/images/toptem.png'/>
      <img className='topIconSubView' src='/images/topteml.png'/>
    </div>
  </div>
}
const abouts:any[] = [
  {
    icon:WAHTICON_SVG,
    title:'What is Zestlab?',
    des:'Zestlab is a Web3-native development studio that focuses on a sustainable future. We leverage Web3 technologies to onramp users in sustainable economic activities and foster a sustainable way of life.'
  },
  {
    icon:WAYICON_SVG,
    title:'Why we start Zestlab?',
    des:'We wholeheartedly recognize that sustainability encompasses more than just environmental considerations. It extends to social, economic, and cultural dimensions as well. At zestlab, we firmly believe that Web3 technology can provides a multifaceted approach to inspire and drive sustainable transformation'
  },
  {
    icon:WHOICON_SVG,
    title:'Who we are?',
    des:'Zestlab is a team of passionate innovators and experts from diverse backgrounds. Our team includes Web3 developers, creative designers, sustainability advocates, and impact-driven entrepreneurs. We bring together a wealth of knowledge and experience to create a dynamic platform that paves the way for sustainable growth and prosperity.'
  },
  {
    icon:WHENICON_SVG,
    title:'When Zestlab was founded?',
    des:'Zestlab was founded at an opportune moment in 2024, a time filled with both opportunities and challenges. We chose to take action at this critical juncture to actively contribute to the future of sustainable development.'
  },
  {
    icon:WHEREICON_SVG,
    title:'Where Zestlab is located?',
    des:'zestlab operates globally, as we believe innovation and solutions know no borders. Leveraging the power of digitization and the internet, we provide support and services to communities worldwide through remote collaboration and a global network of partnerships.'
  },
]
function About(){
  return <div className='column aboutView'>
    <div className='aboutTitle'>ABOUT ZEST</div>
    {
      abouts.map((item:any)=>{
        return <AboutItem item={item} key={item.title}/>
      })
    }
  </div>
}
function AboutItem({item}:any){
  const [show,setShow] = useState(false)
  const [showAni,setShowAni] = useState(false)
  const [height,setHeight] = useState(0)

  const ani = useSpring(
    {
      from: { transform: show ? 'scale(0)' :'scale(1)' },
      to: { transform: show ? 'scale(1)' : 'scale(0)'},
      config:{
        duration:200
      }
    }
  )
  function onShow(){
    if (!show){
      setShow(true)
      setShowAni(true)
    }else {
      setShow(false)
      setTimeout(() => {
        setShowAni(false)
      }, 200);
    }
  }
  return <motion.div className='column aboutItemView' 
    initial={{ opacity: 0, marginLeft: 200 }}
    whileInView={{ opacity: 1, marginLeft: 0 }}
    viewport={{ once: true }}
    >
    <div className='rowBetween' style={{cursor:'pointer'}} onClick={onShow}>
      <div className='row'>
        <img className={`aboutIcon ${show ? 'aboutIconrotate1' : 'aboutIconrotate'}`} src={item.icon}/>
        <div className='aboutSubTitle'>{item.title}</div>
      </div>
      <img className='plus' src={show ? SUBICON_SVG : PLUSICON_SVG}/>
    </div>
    {showAni && <animated.div className='column' style={ani}>
      <div className='aboutDes' >{item.des}</div>
      <div className='aboutLine'/>
    </animated.div>}
    {!showAni && <div className='aboutLine'/>}
  </motion.div>
}
const products:any[] = [
  {
    title:'Model323',
    des:'Coming soon in April.',
    icon:'/images/Modelimg.png'
  },
  {
    title:'Smart Insol™',
    des:'Coming soon in April.',
    icon:'/images/Smarticon.png'
  }
]
function Products(){
  return <div className='column ProductsView'>
    <div className='aboutTitle'>PRODUCTS</div>
    <div className='productItem'>
      {
        products.map((item:any)=>{
          return <ProductsSub key={item.title} item={item}/>
        })
      }
    </div>
  </div>
}
function ProductsSub({item}:any){
  const [mouseEnter,setMouseEnter] = useState(false)
  function onMouseEnter(){
    setMouseEnter(true)
  }
  function onMouseLeave(){
    setMouseEnter(false)
  }
  return <motion.div className='columnCenter ProductsSubView' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  >
    <img className={`ProductsSubViewImg ${mouseEnter ? 'ProductsSubViewImgBig' : 'ProductsSubViewImgSmall'}`} src={item.icon}/>
    <div className='columnCenter productContent'>
      <div className='ProductsSubTtile'>{item.title}</div>
      <div className='ProductsSubDes'>{item.des}</div>
    </div>
  </motion.div>
}
const latests:any[] = [
  {
    icon:'/images/Latest_1.png',
    title:'Services Services Services Services Services Services Services',
    time:'sper 20,2022'
  },
  {
    icon:'/images/Latest_2.png',
    title:'Services Services Services Services Services Services Services',
    time:'sper 20,2022'
  },
  {
    icon:'/images/Latest_3.png',
    title:'Services Services Services Services Services Services Services',
    time:'sper 20,2022'
  }
]
function Latest(){
  return <div className='column latestView'>
    <div className='aboutTitle'>LATEST UPDATE</div>
    <div className='latestViewSubView'>
      {
        latests.map((item:any,index:number)=>{
          return <LatestSub key={item.title} item={item} index={index}/>
        })
      }
    </div>
  </div>
}
function LatestSub({item,index}:any){
  return <motion.div className='column LatestSubView' 
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1}}
  viewport={{ once: true }}
  >
    <img className='latestImg' src={item.icon}/>
    <div className='latesttime'>{item.time}</div>
    <span className='latesttitle'>{item.title}</span>
  </motion.div>
}
function Chat(){
  return <div className='columnCenter chatView'>
    <div className='chatTitle'>Let’s Chat</div>
    <div className='chatTitle'>We Respond Fast</div>
    <motion.div className='chatButton'
      whileInView={{ scale:[1,1.2,0.8,1.1,0.9,1] }}
      transition={{ duration: 0.5,delay:0.5}}
      viewport={{ once: true }}
    >
      <img className='chatTele' src={TELEGRAM_SVG}/>
    </motion.div>
    <div className='row'>
      <div className='chatSubTitle'>Privacy Policy</div>
      <div className='chatSubTitle'>Term & Conditions</div>
      <div className='chatSubTitle'>About Us</div>
      <div className='chatSubTitle'>Contact</div>
    </div>
    <div className='chatcopy'>
      <img className='copyIcon' src={COPYICON_SVG}/>
      Copyright Zestlabs 2024
    </div>
  </div>
}
export async function clientLoader() {
  const data = await fetch('/api/data');
  return [1,2,3];
}