import React from 'react'
import Drawer from '../Drawer'
 import { useTranslation } from 'react-i18next';
import almaarefa from '../../images/almaarefa.jpg'
import './Toolbar.css'
const Toolbar = (props) => {
  const { t, i18n } = useTranslation();
  function handleClick(lang){
    i18n.changeLanguage(lang);
console.log('clicked')
  }
  return(
  <header className="toolbar">
    <nav className="toolbar__navigation">
     <div className="toolbar_navigation-items">
        <ul>
          <li>
            <button className="en" type="button" onClick={()=>handleClick('en')}>EN</button>
          </li>
          <li>
            <button className="ar" type="button" onClick={()=>handleClick('ar')}>AR</button>
          </li>
        </ul>
        <p>contactus@mcst.edu.sa</p>
      </div>
      <div className="toolbar__logo">
        <img src={almaarefa}/>
      </div>
      <div>
          <button onClick={props.toggle}>  
          <i className="awesome user fa fa-user-circle" aria-hidden="true"></i>
          </button>
        </div>
    </nav>
  </header>
  )
}
export default Toolbar;
