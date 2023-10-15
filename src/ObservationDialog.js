import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

export default function ObservationDialog({ open, setOpen, observation }) {
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [lat, lng] = observation.location?.split(",");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullScreen={fullScreen}
      maxWidth="md"
    >
      <DialogTitle id="scroll-dialog-title">Observation</DialogTitle>
      <DialogContent dividers>
        <ImageList cols={5}>
          {observation.photos.map(photo => (
            <ImageListItem key={photo.id} sx={{ width: 350, height: 400 }}>
              <img
                src={photo.url.replace("square", "medium")}
                alt={observation.taxon?.name ?? "Not yet identified"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <h1>{observation.taxon?.name ?? "Not yet identified"}</h1>
        <Grid container>
          <Grid item xs={2}>
            <b>Common name:</b>
          </Grid>
          <Grid item xs={10}>
            {observation.taxon?.preferred_common_name ?? "Not yet identified"}
          </Grid>
          <Grid item xs={2}>
            <b>Observed by:</b>
          </Grid>
          <Grid item xs={10}>
            {observation.user.name_autocomplete ?? observation.user.login}
          </Grid>
          <Grid item xs={2}>
            <b>Observed on:</b>
          </Grid>
          <Grid item xs={10}>
            {new Date(observation.observed_on).toDateString()}
          </Grid>
          <Grid item xs={2}>
            <b>Latitude:</b>
          </Grid>
          <Grid item xs={10}>
            {lat}
          </Grid>
          <Grid item xs={2}>
            <b>Longitude:</b>
          </Grid>
          <Grid item xs={10}>
            {lng}
          </Grid>
          <Grid item xs={2}>
            <b>Description:</b>
          </Grid>
          <Grid item xs={10}>
            {observation.description}
          </Grid>
        </Grid>
        <p>
          <a href={observation.uri} target="_blank" rel="noreferrer">
            View in iNaturalist
          </a>
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
