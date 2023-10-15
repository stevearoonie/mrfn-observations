import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ObservationDialog({ open, setOpen, observation }) {
  const handleClose = () => {
    setOpen(false);
  };
  console.log(observation);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullScreen={fullScreen}
    >
      <DialogTitle id="scroll-dialog-title">Observation</DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <img
            srcSet={`https://inaturalist-open-data.s3.amazonaws.com/photos/${observation.photos[0].id}/medium.jpeg?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`https://inaturalist-open-data.s3.amazonaws.com/photos/${observation.photos[0].id}/medium.jpeg?w=248&fit=crop&auto=format`}
            alt={observation.taxon.name}
            loading="lazy"
          />
          <h1>{observation.taxon.name}</h1>
          <p>{observation.user.name_autocomplete}</p>
          <p>{observation.description}</p>
          <p>
            <a href={observation.uri} target="_blank" rel="noreferrer">
              View in iNaturalist
            </a>
          </p>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
