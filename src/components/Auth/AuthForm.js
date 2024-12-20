import React from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";

const AuthForm = ({ title, onSubmit, formFields }) => {
  const [values, setValues] = React.useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, maxinlineSize: 400, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {formFields.map((field, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              fullWidth
              variant="outlined"
              label={field.label}
              name={field.name}
              type={field.type || "text"}
              onChange={handleChange}
              required={field.required}
            />
          </Grid>
        ))}
      </Grid>
      <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
        {title}
      </Button>
    </Box>
  );
};

export default AuthForm;