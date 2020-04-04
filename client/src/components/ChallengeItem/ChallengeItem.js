import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './ChallengeItem.css'

const GreenCheckbox = withStyles({
    root: {
      color: blue[100],
      '&$checked': {
        color: blue[100],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);



function ChallengeItem({text}) {
  const [state, setState] = useState({
    checkedG: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row className="challengeItem">

      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label={text}
      />

    </FormGroup>
  );
};

export default ChallengeItem;