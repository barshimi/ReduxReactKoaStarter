import React, { Component, PropTypes } from 'react';
import MenuList from './../components/side_menu/MenuList';
import AvatarComponent from './../components/AvatarComponent';
import '../styles/SideMenu.scss';

export default class SideMenu extends React.Component {
    static PropTypes = {
        actions : React.PropTypes.object,
        activemenu : React.PropTypes.object,
        menuTree : React.PropTypes.object,
        confInfo : React.PropTypes.object
    }

    render () {
        return (
             <div id='sidebar-wrapper'>
                  <div className='nav-side-menu'>
                      <div className='brand'>
                         <AvatarComponent height="100px" width="100px" />
                      </div>
                      <div className='menu-list'>
                           <MenuList menuTree={ this.props.menuTree }
                                     subMenu={ false }
                                     activemenu={ this.props.activemenu }/>
                      </div>
                  </div>
             </div>
        );
    }
}


