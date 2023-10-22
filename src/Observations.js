import React, { useMemo, useCallback, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import Button from "@mui/material/Button";
import useSWR from "swr/infinite";
import { CircularProgress } from "@mui/material";
import { Waypoint } from "react-waypoint";
import ObservationSummary from "./ObservationSummary";

export default function Observations({ setCurrentFieldTrip, fieldTrip }) {
  const divRef = useRef(null);
  const date = useMemo(() => new Date(fieldTrip.date).toDateString(), [fieldTrip.date]);
  const getKey = useCallback(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.results.length) {
        return null; // reached the end
      }
      const ret = `https://api.inaturalist.org/v1/observations?order_by=observed_on&order=asc&user_id=${
        fieldTrip.userIds
      }&d1=${fieldTrip.date}&d2=${fieldTrip.date}&per_page=15&page=${pageIndex + 1}`;
      return ret;
    },
    [fieldTrip]
  );

  const { data, setSize, size, isLoading } = useSWR(getKey);

  const hasMore = !data || data.length * 15 < data[0].total_results;

  return (
    <div ref={divRef}>
      <Button onClick={() => setCurrentFieldTrip(null)}>Back</Button>
      <h1>
        {fieldTrip.title} - {date}
      </h1>
      {data?.length && (
        <ImageList cols={5} sx={{ overflow: "hidden" }}>
          {data?.map(page => page.results.map(item => <ObservationSummary key={item.id} observation={item} />))}
        </ImageList>
      )}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Waypoint
          bottomOffset={-100}
          onEnter={() => {
            if (hasMore) {
              setSize(size + 1);
            }
          }}
        />
      )}
      <Button onClick={() => setCurrentFieldTrip(null)}>Back</Button>
    </div>
  );
}
