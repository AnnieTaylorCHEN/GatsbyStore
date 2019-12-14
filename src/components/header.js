import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import gatsbyIcon from '../images/gatsby-icon.png'

const isActive = ({ isCurrent }) => {
  return { className : isCurrent ? 'active' : 'navlink'}
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `blue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    {/* Title and logo */}
    <span style={{display: 'flex', alignItems: 'center'}}>
      <img src={gatsbyIcon} alt="gatsby logo" style={{ 
        borderRadius: '50%',
        border: "3px solid white",
        width: '50px',
        margin: '0 5px' 
        }}/>
      <h1 style={{margin: '0'}}>
        <NavLink
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </NavLink>
      </h1>
    </span>

    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/products">Store</NavLink>

    {/* shopping cart summary */}
    <div
    style={{
      color: 'white',
      cursor: 'pointer',
      border: '3px solid white',
      padding: '3em',
      margin: '1em'
    }}
    className="snipcart-summary snipcart-checkout">
    <div><strong>My cart</strong></div>
    <div><span className="snipcart-total-items"></span>{' '}items added to cart</div>
    <div>Total price{' '}<span className="snipcart-total-price"></span></div>
    </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
