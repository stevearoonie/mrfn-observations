import React, { useMemo, useCallback } from "react";
import ImageList from "@mui/material/ImageList";
import Button from "@mui/material/Button";
import useSWR from "swr/infinite";
import { CircularProgress } from "@mui/material";
import { Waypoint } from "react-waypoint";
import ObservationSummary from "./ObservationSummary";

export default function Observations({ setCurrentFieldTrip, fieldTrip }) {
  const date = useMemo(() => new Date(fieldTrip.date).toDateString(), [fieldTrip.date]);
  const getKey = useCallback(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.results.length) {
        return null; // reached the end
      }
      const ret = `https://api.inaturalist.org/v1/observations?order_by=id&order=asc&user_id=${fieldTrip.userIds}&d1=${
        fieldTrip.date
      }&d2=${fieldTrip.date}&per_page=15&page=${pageIndex + 1}`;
      return ret;
    },
    [fieldTrip]
  );

  const { data, setSize, size } = useSWR(getKey);

  const hasMore = !data || data.length * 15 < data[0].total_results;

  return (
    <>
      <Button onClick={() => setCurrentFieldTrip(null)}>Back</Button>
      <h1>
        {fieldTrip.title} - {date}
      </h1>
      <ImageList cols={5}>
        {data?.map(page => page.results.map(item => <ObservationSummary key={item.id} observation={item} />))}
        {hasMore ? (
          <Waypoint
            onEnter={() => {
              setSize(size + 1);
            }}
          >
            <CircularProgress />
          </Waypoint>
        ) : null}
      </ImageList>
      <Button onClick={() => setCurrentFieldTrip(null)}>Back</Button>
    </>
  );
}
