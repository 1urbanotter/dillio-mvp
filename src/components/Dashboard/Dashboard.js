import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid, Card, CardContent, CardActions, IconButton } from "@mui/material";
import { Add, Delete, Edit, Chat, Description } from "@mui/icons-material";
import { useAuth } from "../../AuthContext.js";
import { signOut } from "firebase/auth";
import { collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig.js";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [cases, setCases] = useState([]);
  const navigate = useNavigate();

  // Fetch cases from Firestore
  useEffect(() => {
    const casesRef = collection(db, "cases");
    const q = query(casesRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedCases = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCases(fetchedCases);
    });

    return unsubscribe;
  }, []);

  // Delete a case
  const handleDelete = async (caseId) => {
    try {
      await deleteDoc(doc(db, "cases", caseId));
      alert("Case deleted successfully!");
    } catch (error) {
      alert("Error deleting case: " + error.message);
    }
  };

  // Logout
  const handleLogout = () => {
    signOut(auth).then(() => alert("Logged out!"));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {currentUser?.email || "User"}!
      </Typography>

      {/* Navigation Buttons */}
      <Box sx={{ mb: 4, display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={() => navigate("/new-case")}>
          New Case
        </Button>
        <Button variant="contained" color="secondary" startIcon={<Description />} onClick={() => navigate("/generate-documents")}>
          Generate Document
        </Button>
        <Button variant="outlined" color="primary" startIcon={<Chat />} onClick={() => navigate("/chatbot")}>
          Open Chatbot
        </Button>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {/* Case List */}
      <Typography variant="h5" gutterBottom>
        Recent Cases
      </Typography>
      <Grid container spacing={2}>
        {cases.length ? (
          cases.map((caseItem) => (
            <Grid item xs={12} sm={6} md={4} key={caseItem.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{caseItem.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Client: {caseItem.clientName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {caseItem.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(`/cases/${caseItem.id}`)}>
                    View
                  </Button>
                  <IconButton color="primary" onClick={() => navigate(`/cases/edit/${caseItem.id}`)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(caseItem.id)}>
                    <Delete />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">
            No cases available.
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Dashboard;