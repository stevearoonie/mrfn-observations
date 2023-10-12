import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import FieldTripSummary from "./FieldTripSummary";

//TODO: retrieve data from local JSON file using fetch or SWR
const fieldTrips = [
  {
    title: "Quarries Road, Woodend",
    date: "October 8, 2023",
    image: "326183990/small.jpeg"
  },
  {
    title: "Conglomerate Gully, Riddells Creek",
    date: "October 22, 2023",
    image: "326165397/small.jpeg"
  },
  {
    title: "Quarries Road, Woodend",
    date: "October 8, 2023",
    image: "326183990/small.jpeg"
  },
  {
    title: "Conglomerate Gully, Riddells Creek",
    date: "October 22, 2023",
    image: "326165397/small.jpeg"
  },
  {
    title: "Quarries Road, Woodend",
    date: "October 8, 2023",
    image: "326183990/small.jpeg"
  },
  {
    title: "Conglomerate Gully, Riddells Creek",
    date: "October 22, 2023",
    image: "326165397/small.jpeg"
  },
  {
    title: "Quarries Road, Woodend",
    date: "October 8, 2023",
    image: "326183990/small.jpeg"
  },
  {
    title: "Conglomerate Gully, Riddells Creek",
    date: "October 22, 2023",
    image: "326165397/small.jpeg"
  }
];

export default function FieldTrips({ setMode }) {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Grid container spacing={2}>
        {fieldTrips.map(fieldTrip => (
          <Grid item xs={3}>
            <FieldTripSummary setMode={setMode} fieldTrip={fieldTrip} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
