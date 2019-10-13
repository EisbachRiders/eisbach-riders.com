import React from 'react'
import Link from '../ui/Link'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    color: theme.status.black,
    fontSize: 12,
    textTransform: 'capitalize',
    paddingBottom: 10,
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  link: {
    height: 34,
    margin: 0,
    paddingBottom: 10,
  },
  linkText: {
    color: theme.status.black,
    fontSize: 12,
    textTransform: 'capitalize',
    [theme.breakpoints.up('sm')]: {
      lineHeight: 2,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  textHeading: {
    color: theme.status.finDarker,
    fontSize: 12,
    textTransform: 'uppercase',
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      paddingTop: 0,
    },
  },
}))

function FooterNavigation() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.container}>
      <div>
        <Typography className={classes.textHeading}>
          {t('footer.customerService')}
        </Typography>
        <Link to="/payment/">
          <Typography className={classes.text}>
            {t('footer.payment')}
          </Typography>
        </Link>
        <Link to="/shipping/">
          <Typography className={classes.text}>
            {t('footer.shipping')}
          </Typography>
        </Link>
        <Link to="/returns/">
          <Typography className={classes.text}>
            {t('footer.returns')}
          </Typography>
        </Link>
        <Link to="/termsAndConditions/">
          <Typography className={classes.text}>{t('footer.terms')}</Typography>
        </Link>
      </div>
      <div>
        <Typography className={classes.textHeading}>Explore</Typography>
        <Link to="/eisbach/">
          <Typography className={classes.text}>
            {t('header.weather')}
          </Typography>
        </Link>
        <Link to="/about/">
          <Typography className={classes.text}>{t('header.about')}</Typography>
        </Link>
        <Link to="/faq/">
          <Typography className={classes.text}>{t('header.faq')}</Typography>
        </Link>
      </div>
      <div>
        <Typography className={classes.textHeading}>
          {t('header.shop')}
        </Typography>
        <p className={classes.link}>
          <MuiLink
            className={classes.linkText}
            href="https://shop.eisbach-riders.com/product-category/fins/"
          >
            fins
          </MuiLink>
        </p>
        <p className={classes.link}>
          <MuiLink
            className={classes.linkText}
            href="https://shop.eisbach-riders.com/product-category/fins/"
          >
            leashes
          </MuiLink>
        </p>
        <p className={classes.link}>
          <MuiLink
            className={classes.linkText}
            href="https://shop.eisbach-riders.com/product-category/fins/"
          >
            accessories
          </MuiLink>
        </p>
        <p className={classes.link}>
          <MuiLink
            className={classes.linkText}
            href="https://shop.eisbach-riders.com/product-category/fins/"
          >
            apparel
          </MuiLink>
        </p>
      </div>
    </div>
  )
}

export default FooterNavigation
