import React, { Component, PropTypes } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';


export default class MenuList extends React.Component {
    static PropTypes = {
        menuTree : React.PropTypes.array,
        subMenu : React.PropTypes.bool,
        openSubMenu : React.PropTypes.bool,
        activemenu : React.PropTypes.string
    }

    constructor (props) {
        super(props);

        this.state = {
            activeList : "",
            menuTree : this.props.menuTree,
            parentMenu : this.props.hasOwnProperty("parentMenu") ? this.props.parentMenu : []
        }

        this.eventSelectTab = this.eventSelectTab.bind(this);
    }

    static defaultProps = {
        openSubMenu : false,
        openSubMenuHight : 0
    };

    eventSelectTab(title) {
      if(title == this.state.activeList || title == "mediation") return;

      var childMenuRef = this.refs.childMenu;
      if(childMenuRef !== undefined){
         childMenuRef.setState({
            menuTree : this.setMenuTreeObj(title, childMenuRef.state.menuTree),
            activeList : title
         })
      }
      if(this.state.parentMenu.length > 0){
         this.setState({
             parentMenu : this.setMenuTreeObj(title, this.state.parentMenu)
         })
      }
      this.setState({
         menuTree : this.setMenuTreeObj(title, this.state.menuTree),
         activeList : title
      })
    }

    setMenuTreeObj = (title, obj) => {
      return obj.map( item => {
         if(item.hasOwnProperty("activeList")) delete item["activeList"];
         if(title.indexOf(item.refName) > -1) item["activeList"] = true;
        return item;
      })
    }

    componentWillMount() {
        var path = window.location.pathname.split("/");
        if(path.indexOf("performance") > -1) return;
        this.setState({
           menuTree : this.setMenuTreeObj(path, this.state.menuTree)
        })
    }

    componentWillReceiveProps (nextProps) {
        if(!shallowEqual(nextProps.selectedApp, this.props.selectedApp)) {
            if(!shallowEqual(nextProps.menuTree, this.props.menuTree)) {

                var path = window.location.pathname.split("/");
                this.setState({
                   menuTree : this.setMenuTreeObj(path, nextProps.menuTree)
                })
            }
        }
    }

    render () {
        var menuList,
            openSubMenuHight = 0,
            refName = '',
            path = window.location.pathname.split("/");
        if(this.state.menuTree.length > 0){
            menuList = this.state.menuTree.map((node, index) => {
                 var urlAdd = node.hasOwnProperty("url") ? node.url + "/" : '#',
                     tabImg = node.hasOwnProperty("icon") ? <span className={ node.title + "Icon" }><img src={ node.icon }/></span> : '';

                 if(node.hasOwnProperty("refName")) refName = node.refName;
                 if(node.hasOwnProperty("activeList") && node.hasOwnProperty("childNodes")) openSubMenuHight = ( node["childNodes"].length * 38 ) + ( node["childNodes"].length * 1 );

                 return (
                      <li className={ "nav-dropdown" + ( node.hasOwnProperty("activeList") || path.indexOf(node.title) > -1 ? " active" : "" ) } key={ node.title } onClick={ this.eventSelectTab.bind(this, refName) }>
                         <Link to={ urlAdd }
                               className={ !this.props.subMenu ? "mainBtn " + node.title + 'Btn' : node.title + 'Btn' }
                               ref={ node.title }>
                            { tabImg }
                            <span className={ "MenuTabTitle" + this.props.activemenu } >
                              { node.title }
                            </span>
                         </Link>
                         {(() => {
                            if(node.hasOwnProperty("childNodes")){
                                return <MenuList menuTree={ node.childNodes }
                                                 subMenu={ true }
                                                 ref="childMenu"
                                                 openSubMenu={ node.hasOwnProperty("activeList") || path.indexOf(node.title) > -1 ? true : false }
                                                 openSubMenuHight={ openSubMenuHight }
                                                 parentMenu={ this.state.menuTree }/>
                            }
                         })()}
                      </li>
                 )
            });
        }
        return (
           <ul className="nav nav-pills nav-stacked">
             { menuList }
           </ul>
        )
    }
}
