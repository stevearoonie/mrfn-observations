import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FieldTripSummary({ setCurrentFieldTrip, fieldTrip }) {
  const date = useMemo(() => new Date(fieldTrip.date).toDateString(), [fieldTrip.date]);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://inaturalist-open-data.s3.amazonaws.com/photos/${fieldTrip.image}`}
        title={`${fieldTrip.title} - ${date}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fieldTrip.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setCurrentFieldTrip(fieldTrip)}>
          Observations
        </Button>
      </CardActions>
    </Card>
  );
}
