import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogActions from "@material-ui/core/DialogActions"
import TextField from "@material-ui/core/TextField"
import ListItem from "@material-ui/core/ListItem"
import CircularProgress from "@material-ui/core/CircularProgress"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/core/Alert"

const useStyles = makeStyles(theme => ({
  form: {
    padding: 30,
  },
  inputContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  input: {
    flexBasis: "100%",
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      flexBasis: "48%",
    },
  },
  inputMessage: {
    width: "100%",
    marginBottom: 30,
  },
  link: {
    color: theme.color.white,
    fontSize: 12,
    textTransform: "capitalize",
    letterSpacing: 2,
    fontWeight: 500,
    padding: "0 10px",
    width: "49%",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      width: "fit-content",
    },
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  listItemMobile: {
    textTransform: "capitalize",
  },
  right: {
    float: "right",
  },
}))

function Contact({ variant, align }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [isEmailValid, setEmailValid] = useState(true)
  const [isNameValid, setNameValid] = useState(true)
  const [isMessageValid, setMessageValid] = useState(true)
  const [isTouched, setTouched] = useState(false)
  const [isSnackbarOpen, setSnackbar] = useState(false)
  const [alert, setAlert] = useState("success")
  const [isLoading, setLoading] = useState(false)

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setSnackbar(false)
  }

  const handleChange = name => event => {
    if (!isTouched) {
      setTouched(true)
    }
    if (name === "email") {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      if (!pattern.test(event.target.value)) {
        setEmailValid(false)
        setEmail(event.target.value)
      } else {
        setEmailValid(true)
        setEmail(event.target.value)
      }
    }
    if (name === "name") {
      if (event.target.value.length > 500) {
        setNameValid(false)
      } else {
        setNameValid(true)
        setName(event.target.value)
      }
    }
    if (name === "message") {
      if (event.target.value.length > 1000) {
        setMessageValid(false)
      } else {
        setMessageValid(true)
        setMessage(event.target.value)
      }
    }
  }

  const handleSubmit = () => {
    if (email === "") {
      setEmailValid(false)
    }
    if (name === "") {
      setNameValid(false)
    }
    if (message === "") {
      setMessageValid(false)
    }
    setLoading(true)
    if (
      isEmailValid &&
      isMessageValid &&
      isNameValid &&
      isTouched &&
      email !== "" &&
      name !== "" &&
      message !== ""
    ) {
      fetch("https://formspree.io/myynzldd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          emailAddress: email,
          name: name,
        }),
      })
        .then(response => {
          if (response.status === 200) {
            setSnackbar(true)
            setAlert("success")
            setEmail("")
            setMessage("")
            setName("")
            setOpen(false)
            setLoading(false)
          } else {
            setAlert("error")
            setSnackbar(true)
            setLoading(false)
          }
        })
        .catch(err => {
          setAlert("error")
          setSnackbar(true)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  return (
    <>
      {variant === "link" && (
        <Button className={classes.link} onClick={() => setOpen(true)}>
          {t("common.contactUs")}
        </Button>
      )}
      {variant === "header" && (
        <ListItem
          button
          onClick={() => setOpen(true)}
          className={classes.listItemMobile}
        >
          {t("common.contactUs")}
        </ListItem>
      )}
      {variant === "button" && (
        <Button
          className={clsx(classes.button, {
            [classes.right]: align === "right",
          })}
          color="primary"
          variant={variant === "outlined" ? "outlined" : "contained"}
          onClick={() => setOpen(true)}
        >
          {t("common.contactUs")}
        </Button>
      )}
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="contact-form"
        open={open}
        maxWidth="md"
        fullWidth={true}
      >
        <DialogTitle id="contact-form-title">
          {t("newsletter.contactTitle")}
        </DialogTitle>
        <form noValidate autoComplete="off" className={classes.form}>
          <div className={classes.inputContainer}>
            <TextField
              id="name"
              label={t("newsletter.name")}
              type="text"
              className={classes.input}
              value={name}
              variant="outlined"
              placeholder={t("newsletter.name")}
              onChange={handleChange("name")}
              required
              error={!isNameValid}
            />
            <TextField
              id="email"
              label={t("newsletter.email")}
              type="email"
              variant="outlined"
              className={classes.input}
              value={email}
              placeholder={t("newsletter.email")}
              onChange={handleChange("email")}
              required
              error={!isEmailValid}
            />
          </div>
          <TextField
            label={t("newsletter.message")}
            id="message"
            type="text"
            variant="outlined"
            multiline
            rows={4}
            className={classes.inputMessage}
            value={message}
            placeholder={t("newsletter.message")}
            onChange={handleChange("message")}
            required
            error={!isMessageValid}
          />
          <DialogActions>
            <Button onClick={() => setOpen(false)} color="primary">
              {t("newsletter.cancel")}
            </Button>
            {isLoading ? (
              <CircularProgress size={24} className={classes.progress} />
            ) : (
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                {t("newsletter.send")}
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={isSnackbarOpen !== false}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleSnackbarClose} variant="filled" severity={alert}>
          {isSnackbarOpen ? t("newsletter.success") : t("newsletter.error")}
        </Alert>
      </Snackbar>
    </>
  )
}

export default Contact
