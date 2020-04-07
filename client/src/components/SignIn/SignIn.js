import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { Alert } from '@material-ui/lab';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css';
import API from '../../utils/API'
import { useAuth } from "../../utils/store";
import { useHistory, Link} from "react-router-dom";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#85FFCE",
    fontSize: 15,
    fontFamily: "Bellota",
    fontWeight: "bold"
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const { setCurrentUser } = useAuth();

  const [error, setError] = useState(false);
  let history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const signIn = (event) => {
    event.preventDefault();

    // Make api call to login route...
    API.signIn(form).then(res => {
      if( res.data.success ) {
        // Redirect..
        console.log(res.data.user)
        setCurrentUser( res.data.user )
        history.push('/homepage')
      } else {
        console.log('error', res.data.msg)
        setError(res.data.msg);
      }
    })
  }


  return (
    <>
      {/* <Avatar className={classes.avatar}> */}
      {/* <LockOutlinedIcon /> */}
      {/* </Avatar> */}
      <Typography style={{color: "#4E5659"}} component="h1" variant="h5">
        Sign in
        </Typography>
      <form className={classes.form} noValidate onSubmit={(event) => signIn(event)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          onChange={(e) => handleChange(e)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => handleChange(e)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        { error && <Alert severity={'error'}>{error}</Alert>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="#4E5659"
          id="loginBtn"
          className={classes.submit}
        >
          Sign In
          </Button>
        <Grid justify="center" container>
          <Grid  item>
            <Link to="/signup" variant="body2">
              Don't have an account? Sign Up
              </Link>
          </Grid>
        </Grid>
      </form>
    </>
    // <Box mt={8}>
    //   <Copyright />
    // </Box>

  );
}
