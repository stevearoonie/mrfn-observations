import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import FieldTrips from "./FieldTrips";
import Observations from "./Observations";
import { SWRConfig } from "swr";

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
  const [currentFieldTrip, setCurrentFieldTrip] = useState(null);
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Container>
        {currentFieldTrip === null && (
          <Box sx={{ my: 4 }}>
            <Typography variant="overline">
              <a href="https://macedonrangesfieldnaturalists.org/">Home</a>
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              Field Trips
            </Typography>
            <FieldTrips setCurrentFieldTrip={setCurrentFieldTrip} />
            <Copyright />
          </Box>
        )}
        {currentFieldTrip && <Observations setCurrentFieldTrip={setCurrentFieldTrip} fieldTrip={currentFieldTrip} />}
      </Container>
    </SWRConfig>
  );
}
