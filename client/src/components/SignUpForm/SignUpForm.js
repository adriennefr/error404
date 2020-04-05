import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../utils/API'
import FemaleSignUp from '../FemaleAvatar/FemaleSignUp';
import MaleSignUp from '../MaleAvatar/MaleSignUp';
import NonbinarySignUp from '../NonbinaryAvatar/NonbinarySignUp';
import './SignUpForm.css'
import { Redirect } from "react-router-dom";


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#85FFCE",
    color: "white",
    fontSize: 15,
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'female'
  });
  const [genderBool, setGenderBool] = useState({
    female: true
  })
  const [redirectLogin, setredirectLogin] = useState(false)


  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const signUp = () => {
    console.log('signingup...')
    const signUpData = {
      ...form
    }

    API.signUp(signUpData).then(res => {
      setredirectLogin(true)
    })
  };

  return redirectLogin ? < Redirect to='/' /> : (
    <>

      <div>
        {/* <Avatar className={classes.avatar}>

        </Avatar> */}
        <Typography component="h1" variant="h5">
          New User?

        </Typography>
        <form className={classes.form} noValidate>
          <Grid container className={classes.gridContainer} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={e => handleChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={e => handleChange(e)}
              />
            </Grid>
            <div>
              <p>Choose your avatar:</p>
            </div>
            <div className="chooseAvatar">
              <FemaleSignUp onClick={() => { setForm({ ...form, ['gender']: 'female' }) }} label="female" selected={form.gender === 'female'} />
              <NonbinarySignUp onClick={() => { setForm({ ...form, ['gender']: 'non' }) }} label="nonbinary" selected={form.gender === 'non'} />
              <MaleSignUp onClick={() => { setForm({ ...form, ['gender']: 'male' }) }} label="male" selected={form.gender === 'male'} />
            </div>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="#ef8354"
            id="signUpBtn"
            className={classes.submit}
            onClick={() => signUp()}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}