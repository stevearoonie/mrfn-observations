import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function ObservationSummary({ observation }) {
  return (
    <ImageListItem>
      <img
        srcSet={`https://inaturalist-open-data.s3.amazonaws.com/photos/${observation.photos[0].id}/square.jpeg?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`https://inaturalist-open-data.s3.amazonaws.com/photos/${observation.photos[0].id}/square.jpeg?w=248&fit=crop&auto=format`}
        alt={observation.taxon.name}
        loading="lazy"
      />
      <ImageListItemBar title={observation.taxon.name} subtitle={observation.user.name_autocomplete} />
    </ImageListItem>
  );
}
