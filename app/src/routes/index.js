import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Auth from './../utils/Auth';


export default ( store ) =>  {
   return (
      <Route path='/'>
         <IndexRedirect to="login"/>
         <Route path='login' store={ store } component={ require('react-router-proxy?name=login!./../views/LoginView') } onEnter={ Auth }/>
         <Route name='app' path='app' store={ store } component={ require('react-router-proxy?name=app!./../layouts/CoreLayout') } onEnter={ Auth }>
              <IndexRedirect to="main"/>
              <Route name='main' path='main' component={ require('react-router-proxy?name=main!./../views/MainView') } store={ store } onEnter={ Auth }/>
              <Route name='about' path='about' component={ require('react-router-proxy?name=about!./../views/AboutView') } store={ store } onEnter={ Auth }/>
              <Route name='reddit' path='reddit' component={ require('react-router-proxy?name=reddit!./../views/RedditView') } store={ store } onEnter={ Auth }/>
         </Route>

         <Route path="*" component={ require('react-router-proxy?name=all!./../views/ForbiddenView') } status={ 404 } />
      </Route>
   )
}

