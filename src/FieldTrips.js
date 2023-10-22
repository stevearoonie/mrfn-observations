import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import FieldTripSummary from "./FieldTripSummary";
import useSWR from "swr";

export default function FieldTrips({ setCurrentFieldTrip }) {
  const { data: fieldTrips } = useSWR("./fieldTrips.json");
  return fieldTrips ? (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        {fieldTrips.map(fieldTrip => (
          <Grid xs={3} key={fieldTrip.date}>
            <FieldTripSummary setCurrentFieldTrip={setCurrentFieldTrip} fieldTrip={fieldTrip} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : null;
}
