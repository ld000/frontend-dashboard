import React from 'react'
import { Menu as AntMenu } from 'antd'
import NavLink from 'components/NavLink/NavLink'
import './Menu.scss'

const SubMenu = AntMenu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

type Props = {
  navs: Array,
  location: Object
};
export class Menu extends React.Component {
  props: Props;

  render () {
    const { location } = this.props
    return (
      <AntMenu style={{ width: 222 }} mode='inline'
        className='menu'
      >
        {
          this.props.navs && this.props.navs.map(function (nav, i) {
            if (!nav.subMenu) {
              return (
                <AntMenu.Item key={i}>
                  <NavLink to={nav['link']} indexLink={i === 0} key={nav['link'].substr(1)}
                    location={location} similarStr={nav['similarStr']}>
                    <p title={nav['name']} className='subMenuTitle'>
                      <span className='iconContainer'>
                        <i className={nav['icon']} />
                      </span>
                      <span title={nav['name']}>
                        {nav['name']}
                      </span>
                    </p>
                  </NavLink>
                </AntMenu.Item>
              )
            } else {
              return <SubMenu key={`sub${i}`}
                title={<p className='subMenuTitle'>
                  <span className='iconContainer'>
                    <i className={nav['icon']} />
                  </span>
                  <span title={nav['name']}>{nav['name']}</span></p>}>
                {
                    nav.subMenu.map((sub, index) => {
                      return <AntMenu.Item key={`subitem${index}`}>
                        <NavLink to={sub['link']} key={`sublink${index}`}
                          location={location}>
                          <p title={sub['name']}>
                            <span title={sub['name']}>
                              {sub['name']}
                            </span>
                          </p>
                        </NavLink>
                      </AntMenu.Item>
                    })
                  }
              </SubMenu>
            }
          })
        }
      </AntMenu>
    )
  }
}

export default Menu
