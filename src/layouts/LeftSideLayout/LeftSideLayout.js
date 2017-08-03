import React from 'react'
import './LeftSideLayout.scss'
import Menu from 'components/Menu/Menu'
// import Bookmarks from 'components/Bookmarks/Bookmarks'
// import BookmarkSidebar from 'components/BookmarkSidebar/BookmarkSidebar'
import { connect } from 'react-redux'
import { openLeft, closeLeft } from 'store/modules/leftSideLayoutExpand/actions'
import R from 'ramda'

type Props = {
  leftSideLayout: Object,
  openLeft: Function,
  closeLeft: Function,
  location: Object,
  isOrNotSuper: Boolean
}

let open = true

export class LeftSide extends React.Component {
  props: Props;

  constructor (props) {
    super(props)
    this.state = { superManger: false }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleBookmarkOnBlur = this.handleBookmarkOnBlur.bind(this)
    this.handleBookmarkOpenUp = this.handleBookmarkOpenUp.bind(this)
    this.handleBookmarkOpenDown = this.handleBookmarkOpenDown.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    // console.info('leftSide: ', nextProps)
    if (!R.equals(nextProps.isOrNotSuper, this.props.isOrNotSuper)) {
      this.setState({ superManger: nextProps.isOrNotSuper })
    }
  }

  componentDidUpdate () {
    let left = this.refs.leftSide
    let testIcon = document.querySelector('#testIcon')

    // if (this.props.leftSideLayout.expandStatus === 'close') {
    //   open.children[0].className = 'fa fa-angle-right'
    //   contentLayout.style.left = '60px'
    //   left.className = classes['left_side-layout_close']
    //   testIcon.setAttribute('data-currstate', 'close')
    //   // testIcon.style.left = 'calc(50% - 20px)'
    // } else {
    //   open.children[0].className = 'fa fa-angle-left'
    //   contentLayout.style.left = '220px'
    //   left.className = classes['left_side-layout_open']
    //   testIcon.setAttribute('data-currstate', 'open')
    //   // testIcon.style.left = 'calc(50% - 20px)'
    // }

    // contentLayout.style.left = '220px'
    left.className = 'left_side-layout_open'
    // testIcon.setAttribute('data-currstate', 'open')

    // this.addHover()
  }
  handleOpen () {
    let left = this.refs.leftSide
    let contentLayout = document.getElementById('content-layout')
    let testIcon = document.querySelector('#testIcon')
    if (this.props.leftSideLayout.expandStatus === 'close') {
      this.props.openLeft()
      testIcon.setAttribute('data-currstate', 'open')
      testIcon.style.left = '45%'
      contentLayout.style.left = '220px'
      left.className = 'left_side-layout_open'
    } else {
      this.props.closeLeft()
      testIcon.setAttribute('data-currstate', 'close')
      testIcon.style.left = '18%'
      contentLayout.style.left = '60px'
      left.className = 'left_side-layout_close'
    }
  }

  addHover () {
    let testIcon = document.querySelector('#testIcon')
    testIcon.addEventListener('mouseenter', function (e) {
      if (this.attributes['data-currstate'].value === 'open') {
        this.className = 'tcon tcon-grid tcon-grid--rearrange tcon-transform-close'
      } else {
        this.className = 'tcon tcon-grid tcon-grid--rearrange tcon-transform-open'
      }
    })
    testIcon.addEventListener('mouseleave', function (e) {
      this.className = 'tcon tcon-grid tcon-grid--rearrange'
    })
  }

  handleBookmarkOnBlur (e) {
    let sidebar = this.refs.bookmarkSidebar
    sidebar.style.left = '-220px'
    open = false
  }

  handleBookmarkOpenDown () {
    const sidebar = this.refs.bookmarkSidebar
    sidebar.style.left = '60px'
    open = true
  }

  handleBookmarkOpenUp () {
    const sidebar = this.refs.bookmarkSidebar
    if (open) sidebar.focus()
  }

  render () {
    const navs = () => {
      return [
        { name: 'rainbolt', link: '/rainbolt', icon: 'fa fa-tachometer' },
        { name: 'flower', link: '/flower', icon: 'fa fa-tachometer' }
      ]
    }

    return (
      <div className='container'>
        <div ref='leftSide' className='left_side-layout_open'>
          <Menu menuTitle={'数据控制台'} location={this.props.location}
            navs={navs()}
          />
          <hr />
          <div className='left_side-bookmarkOpen' title='收藏'>
            <i className='fa fa-star' aria-hidden='true'
              onMouseDown={this.handleBookmarkOpenDown} onMouseUp={this.handleBookmarkOpenUp} />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  leftSideLayout: state.leftSideLayoutExpand,
  // location: state.router.locationBeforeTransitions
})

export default connect(mapStateToProps, {
  openLeft, closeLeft
}, null, { pure: false })(LeftSide)
