import React from 'react';
import { Grid, TextField, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({name, label, half, autoFocus, handleChange, handleShowPassword, type}) => {
  return (
    <Grid xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name} variant="outlined" label={label} onChange={handleChange} required fullWidth autoFocus={autoFocus} type={type} xs={6} inputProps={name === 'password' && {
          andAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }} />
                  </Grid>
  )
}

export default Input