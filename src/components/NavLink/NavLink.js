import React from 'react'
import R from 'ramda'
import { Link, IndexLink, withRouter } from 'react-router'
import './NavLink.scss'

type Props = {
  indexLink: React.PropTypes.bool,
  router: React.PropTypes.object,
  to: React.PropTypes.string,
  similarStr: React.PropTypes.string,
  location: React.PropTypes.object
}
class NavLink extends React.Component {
  props: Props

  render () {
    const linkProps = R.omit(['indexLink', 'router', 'similarStr', 'location'], this.props)
    const { indexLink, router, to, similarStr, location } = this.props
    const currentUrl = location.query.type === similarStr
    const isActive = (() => {
      if (router.isActive('/', true) && indexLink) {
        // 首页默认状态
        return 'menu-li active'
      } else if (router.isActive(to, true)) {
        // 路由激活，eg： ‘/search:id’
        return 'menu-li active'
      } else if (similarStr && currentUrl || router.isActive('/asset', true) && similarStr === 'asset' ||
        router.isActive('/device-type', true) && similarStr === 'fieldGroup') {
        // 二级查询详细信息时
        return 'menu-li active'
      } else if (similarStr === 'asset' && location.query.assetId) {
        // 三级页面查看field时，只有asset有
        return 'menu-li active'
      } else if (similarStr === 'synonyms' && location.pathname.indexOf(similarStr) !== -1) {
        // 同义词字段查看某一字段下的所有同义词的二级页面
        return 'menu-li active'
      } else {
        return 'menu-li'
      }
    })()
    return (
      <span className={isActive}>
        {
          this.props.indexLink === true ? (
            <IndexLink {...linkProps}
              className='menu-navlink' />
          ) : (
            <Link {...linkProps}
              className='menu-navlink' />
          )
        }
      </span>
    )
  }
}
export default withRouter(NavLink)
