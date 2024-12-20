import React from "react";
import { TextField, Button, Grid2, Typography } from "@mui/material";
import { db } from "../FirebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const handleNewCase = async () => {
  try {
    const newCase = {
      title: "Untitled Case",
      clientName: "New Client",
      description: "Enter case description here...",
      createdAt: Timestamp.now(),
    };
    console.log(db);
    const docRef = await addDoc(collection(db, "cases"), newCase);
    alert(`New case created with ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error creating case:", error);
    alert("Error creating case. Check the console for more details.");
  }
};

  return (
    <form onSubmit={handleSubmit} style={{ maxinlineSize: "600px", margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        New Case Form
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Case Title" required />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Client Name" required />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField fullWidth label="Case Description" multiline rows={4} />
        </Grid2>
      </Grid2>
    <Button
        variant="contained"
        color="primary"
        onClick={handleNewCase}
    >
        New Case
    </Button>
    </form>
  );

export default CaseForm;