import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RedditCreators } from './../actions/reddit_actions';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

import './../styles/RedditView.scss';

export default class RedditView extends React.Component {
   static propTypes = {
        actions  : React.PropTypes.object,
        RedditList : React.PropTypes.array
   }

   constructor (props) {
       super(props);

       this.state = {
          searchVal  : ''
       }
       this.HandleSearchChange = this.HandleSearchChange.bind(this);
       this.searchReddit = this.searchReddit.bind(this);
   }

   HandleSearchChange(e) {
      this.setState({
        searchVal : e.target.value
      })
   }

   searchReddit() {
      const { searchVal } = this.state;
      if(!searchVal.length) return;

      this.props.actions.FetchRedditList(searchVal);
      this.setState({
         searchVal : ''
      })
   }

   render () {
    const { searchVal } = this.state;
    const { RedditList } = this.props;

    let redditElm = <p className="noResults">No Results</p>;
    if(RedditList.length) {
       redditElm = RedditList.map((post) => {
         return(
             <li className="redditList clearfix" key={ `${post.author}_${post.url}` }>
                <div className="postTitle">
                    <span>{ post.title }</span>
                </div>
                <div className="postContainer">
                    <span className="pastTime">{ `created : ${post.created}` }</span>
                    <span className="postComments">{ post.num_comments > 0 ? post.num_comments : '' }</span>
                    <a className="postComLink" href={ post.permalink } target="_blank">comments</a>
                    <a className="readPost" href={ post.url } target="_blank">
                        <button type="button">read post</button>
                    </a>
                </div>
             </li>
         )
       })
    }
    return (
      <div>
        <div className="searchQuery">
          <h1 className="seachTitle">search subject</h1>
          <input className="serachInp" type="text" value={ searchVal } onChange={ this.HandleSearchChange } />
          <button className="searchBtn" type="button" onClick={ this.searchReddit }>Search Results</button>
        </div>
        <div className="content">
          { RedditList.length ? <div><h2 className="listTitle">reddit post results</h2><ul>{ redditElm }</ul></div> : redditElm }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    RedditList : state.RedditList
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(Object.assign({}, RedditCreators), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(RedditView);

