import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Sidebar from './Sidebar.js';
import CaseList from "../CaseManagement/CaseList";
import NewCaseForm from "../CaseManagement/NewCaseForm";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Case List */}
          <Grid item xs={12} md={8}>
            <Typography variant="h6">Your Cases</Typography>
            <CaseList />
          </Grid>

          {/* New Case Form */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Create a New Case</Typography>
            <NewCaseForm />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;