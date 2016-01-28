import React, { PropTypes } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';

function mapParams (paramKeys, params) {
  let paramsObj = paramKeys.reduce((acc, key) => {
      return Object.assign({}, acc, { [key]: params.selectApp.hasOwnProperty(key) ? params.selectApp[key] : params.dateRange[key]});
  }, {});
  for(var k in paramsObj)
    if(paramsObj[k].length == 0) delete paramsObj[k];

  return serializeObj(paramsObj);
}

/**
 * convert object to GET query string params
 * @param  {object} obj
 * @return {string}      get query string
 */
function serializeObj (obj) {
    return Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&')
}

export default function fetchOnUpdate (paramKeys, fn) {
  return DecoratedComponent =>
  class FetchOnUpdateDecorator extends React.Component {

    static propTypes = {
      actions: PropTypes.object,
      params: PropTypes.object
    }

    componentWillMount () {
       fn(mapParams(paramKeys, this.props), this.props.actions);
    }

    componentDidUpdate (prevProps) {
      const newParams = mapParams(paramKeys, this.props);
      const prevParams = mapParams(paramKeys, prevProps);

      if (!shallowEqual(newParams, prevParams))
        fn(newParams, this.props.actions);
    }

    render () {
      return (
        <DecoratedComponent {...this.props} />
      )
    }
  }
}
