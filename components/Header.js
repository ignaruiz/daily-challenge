import React from 'react';
import Image from 'next/image';
import ball from '../assets/ball2.png'
import { FaRegQuestionCircle,FaRegSun,FaChartBar } from "react-icons/fa";
import { useRouter } from 'next/router';


const style = {
  wrapper: `h-[12%] flex w-screen items-center px-16 bg-gray-900 justify-between`,
  text: `text-4xl font-semibold mr-8 text-white  `,
  leftMenu: `flex gap-8 text-lg`,
  rightMenu: `flex gap-5  `,
  icon: `cursor-pointer hover:opacity-70`,
}

const Header = () => {

    const router = useRouter()

    return(
        <div className={style.wrapper} >
                <div className={style.leftMenu} >
                    <Image src={ball} alt='fire' height={45} width={45} onClick={()=>router.push('/prueba')} />
                    <h1 className={style.text}>Daily Footbal Challenge</h1>
                </div>
                <div className={style.rightMenu}>
                    <FaRegSun size={30} color='white' className={style.icon}/>
                    <FaChartBar size={30} color='white' className={style.icon}/>
                    <FaRegQuestionCircle size={30} color='white' className={style.icon}/>
                </div>  
        </div>    
        
    )
}


export default Header;