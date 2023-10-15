import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import FieldTripSummary from "./FieldTripSummary";

//TODO: retrieve data from local JSON file using fetch or SWR
const fieldTrips = [
  {
    title: "Quarries Road, Woodend",
    date: "2023-10-08",
    image: "326183990/small.jpeg",
    userIds: "stevearoonie"
  },
  {
    title: "Conglomerate Gully, Riddells Creek",
    date: "2023-10-22",
    image: "326165397/small.jpeg"
  }
];

export default function FieldTrips({ setCurrentFieldTrip }) {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        {fieldTrips.map(fieldTrip => (
          <Grid item xs={3}>
            <FieldTripSummary setCurrentFieldTrip={setCurrentFieldTrip} fieldTrip={fieldTrip} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
