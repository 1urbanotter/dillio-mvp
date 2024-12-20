import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const DocumentGenerator = () => {
  const [clientName, setClientName] = useState("");
  const [caseDetails, setCaseDetails] = useState("");
  const [generatedDocument, setGeneratedDocument] = useState("");

  const handleGenerate = () => {
    const template = `
      Dear ${clientName},

      Regarding your case: ${caseDetails},

      This is a placeholder legal document. Please consult an attorney for further details.

      Sincerely,
      dill.io Legal Assistant
    `;
    setGeneratedDocument(template);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" gutterBottom>
        Generate Legal Document
      </Typography>
      <TextField
        fullWidth
        label="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Case Details"
        value={caseDetails}
        onChange={(e) => setCaseDetails(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleGenerate} sx={{ margininsetBlockStart: 2 }}>
        Generate
      </Button>
      {generatedDocument && (
        <Box sx={{ margIninsetBlockStart: 3, padding: 2, border: "1px solid #ccc" }}>
          <Typography variant="body1" component="pre">
            {generatedDocument}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DocumentGenerator;