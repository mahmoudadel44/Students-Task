import React from 'react'
import Toolbar from './Components/Toolbar/Toolbar'
import SlideDrawer from './Components/SlideDrawer/SlideDrawer.js'
import Backdrop from './Components/SlideDrawer/Backdrop.js'
import Home from './Pages/Home'
export default class App extends React.Component {
   state = { drawerOpen: false }
drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }
   render(){
      let backdrop;
      if(this.state.drawerOpen){
        backdrop = <Backdrop close={this.backdropClickHandler}/>;
       }
      return(

         <div>
           < SlideDrawer show={this.state.drawerOpen} />
           { backdrop }
           < Toolbar toggle={this.drawerToggleClickHandler} />
           <Home/>
         </div>
      )
    }
}