import React, { useState, useMemo } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ObservationDialog from "./ObservationDialog";

export default function ObservationSummary({ observation }) {
  const [open, setOpen] = useState(false);
  const url = useMemo(() => observation.photos[0].url.replace("square", "small"), [observation.photos]);
  return (
    <>
      <ImageListItem onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
        <img src={url} alt={observation.taxon?.name ?? "Not yet identified"} loading="lazy" />
        <ImageListItemBar
          title={observation.taxon?.name ?? "Not yet identified"}
          subtitle={observation.user.name_autocomplete ?? observation.user.login}
        />
      </ImageListItem>
      <ObservationDialog open={open} setOpen={setOpen} observation={observation} />
    </>
  );
}
