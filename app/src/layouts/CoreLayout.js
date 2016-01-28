import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { actionCreators } from './../actions/core_layout';
import { authActionsCreators } from './../actions/auth_actions';
import { arrangeMenuTree } from './../utils';


import SideMenu from './../containers/SideMenu';
import './../styles/core.scss';

function setNavTitleObj (newPath) {
   var navObj = newPath.split("/").filter( title => title.length > 0 ),
            navTitleObj = { main: '', sub: '' };
        navObj.pop();
        navTitleObj.main = navObj[0];
        if(navObj.length > 1) navTitleObj.sub = navObj[1];
  return navTitleObj;
}

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element,
    actions  : React.PropTypes.object,
    navTitle : React.PropTypes.object,
    menuState: React.PropTypes.string
  }

  constructor (props) {
    super(props);

    this.state = {
       menuTree : this.props.menuTree
    }

    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
  }

  eventToggleSidebar(e){
     e.preventDefault();
     this.props.toggleMenu(this.props.menuState.length > 0 ? '' : " active");
  }

  componentWillMount () {
     const WillMountPath = setNavTitleObj (this.props.location.pathname);
     if (!shallowEqual(WillMountPath, this.props.navTitle))
        this.props.actions.setNavTitle(WillMountPath);
  }

  componentWillReceiveProps (nextProps) {
     if(!shallowEqual(nextProps.selectApp, this.props.selectApp)){
        var menuState = nextProps.selectApp.sdk_type == 0 ? true : false,
            menuSelected = nextProps.routerState.location.pathname.split("/"),
            newMenu = arrangeMenuTree(menuState, menuSelected);

        this.props.actions.configureMenu(newMenu);
        this.setState({
           menuTree : newMenu
        })
     }
  }

  render() {
    const { menuTree } = this.state;
    const { menuState , navTitle, userDetails, selectApp, searchInput, showAppList, actions, history } = this.props;
    return (
      <div id='pageContainer' className={ menuState }>
          <div id='wrapper' className={ menuState }>
             <SideMenu activemenu={ menuState }
                       menuTree={ menuTree }
                       actions={ actions }
                       history={ history }/>
             <div className='view-container'>
                {this.props.children}
             </div>
          </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
    menuState : state.menuState,
    fetchUserAuth: state.fetchUserAuth,
    menuTree: state.menuTree,
    navTitle: state.navTitle,
    routerState : state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(Object.assign(actionCreators, authActionsCreators), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);

