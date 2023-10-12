import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import FieldTrips from "./FieldTrips";
import Observations from "./Observations";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Macedon Ranges Field Naturalists
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const [mode, setMode] = useState("fieldTrips");
  return (
    <Container>
      {mode === "fieldTrips" && (
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Field Trips
          </Typography>
          <FieldTrips setMode={setMode} />
          <Copyright />
        </Box>
      )}
      {mode === "observations" && <Observations setMode={setMode} />}
    </Container>
  );
}
