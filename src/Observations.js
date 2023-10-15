import React, { useState, useMemo } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";
import { Waypoint } from "react-waypoint";

function Page({ fieldTrip, index }) {
  const { data: observations } = useSWR(
    `https://api.inaturalist.org/v1/observations?order_by=id&order=asc&user_id=${fieldTrip.userIds}&d1=${fieldTrip.date}&d2=${fieldTrip.date}&per_page=15&page=${index}`
  );
  if (!observations) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return observations.results.map(item => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`https://inaturalist-open-data.s3.amazonaws.com/photos/${item.photos[0].id}/square.jpeg?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`https://inaturalist-open-data.s3.amazonaws.com/photos/${item.photos[0].id}/square.jpeg?w=248&fit=crop&auto=format`}
        alt={item.taxon.name}
        loading="lazy"
      />
      <ImageListItemBar title={item.taxon.name} subtitle={item.user.name_autocomplete} />
    </ImageListItem>
  ));
}
export default function Observations({ setCurrentFieldTrip, fieldTrip }) {
  const [cnt, setCnt] = useState(1);
  const date = useMemo(() => new Date(fieldTrip.date).toDateString(), [fieldTrip.date]);

  const pages = [];
  for (let i = 1; i <= cnt; i++) {
    pages.push(<Page index={i} key={i} fieldTrip={fieldTrip} />);
  }
  return (
    <>
      <Button onClick={() => setCurrentFieldTrip(null)}>Back</Button>
      <h1>
        {fieldTrip.title} - {date}
      </h1>
      <ImageList cols={5}>
        {pages}
        <Waypoint
          onEnter={() => {
            setCnt(cnt + 1);
          }}
        />
      </ImageList>
      <Button onClick={() => setCurrentFieldTrip(null)}>Back</Button>
    </>
  );
}
