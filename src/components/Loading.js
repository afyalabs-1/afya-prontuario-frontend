import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  skeleton: {
    marginBottom: 16,
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div>
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />

      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
    </div>
  );
};

export default Loading;
