import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Link from '../Link'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return { changeProduct: () => dispatch({ type: `Product` }) }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '30%',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  descriptionContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  price: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginRight: 15,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },
  fullWidth: {
    width: '100%',
  },
}))

function ShopItem({ product }) {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Link to={'/product/'}>
        <img
          src={product.images[0].src}
          className={classes.img}
          alt={product.name}
        />
      </Link>
      <div className={classes.descriptionContainer}>
        <Typography className={classes.name}>{product.name}</Typography>
        <div className={classes.fullWidth}>
          <div className={classes.priceContainer}>
            <Typography variant="h6" className={classes.price}>
              {`€${product.price}`}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default connect(mapDispatchToProps)(ShopItem)
