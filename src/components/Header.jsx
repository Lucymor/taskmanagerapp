import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import Logo from '../assets/logo.png';
import 'boxicons';
import { UserContext } from '../contexts/UserContext';

export default function Header({menu}) {

    const {user,setUser}=useContext(UserContext);
    const login=menu[2];

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={Logo} />
            </div>
            <div className='navbar-right'>
                {menu.filter(currentmenu => currentmenu.menubar && (!currentmenu.needsLogin || user)).map(currmenu => <Link className='menu-button' key={currmenu.path} to={currmenu.path}>
                    {currmenu.icon && <><box-icon name={currmenu.icon} color='white'></box-icon><br /></>}
                    {currmenu.name}
                </Link>)}
                {user ? (<button className='menu-button' onClick={()=>{setUser(null)}}><box-icon name="log-out" color='white'></box-icon><br/>Kilépés</button>):(<Link className='menu-button' key={login.path} to={login.path}>
                    {login.icon && <><box-icon name={login.icon} color='white'></box-icon><br /></>}
                    {login.name}
                </Link>)}
                <button className='menu-button hide-on-pc'><box-icon name='menu-alt-right' color='white' size='lg'></box-icon></button>
                
            </div>


        </div>
    )
}