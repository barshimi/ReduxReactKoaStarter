import React from 'react'
import { Link } from 'react-router'

import './../styles/MainView.scss';

export default class About extends React.Component {
  render () {
    const link = (<Link to="/stargazers/gaearon"><code>@gaearon</code></Link>)
    const redux = (<code>Redux</code>)

    return (
      <div>
        <div className="header">
          <h1>Main</h1>
        </div>
        <div className="content">
          <h2>Libraries</h2>

          <ul>
              <li>
                <a href="https://github.com/koajs" target="_blank">
                  Koa.js
                </a>
              </li>
              <li>
                <a href="https://webpack.github.io/" target="_blank">
                  Webpack
                </a>
              </li>
              <li>
                <a href="https://github.com/facebook/react" target="_blank">
                  React.js
                </a>
              </li>
              <li>
                <a href="https://github.com/gaearon/redux" target="_blank">
                  Redux
                </a>
              </li>
              <li>
                <a href="https://github.com/rackt/react-router" target="_blank">
                  React Router
                </a>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}
