import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 5,
  },
  skeleton: {
    marginBottom: 100,
    marginRight: 100,
    marginLeft: 100,
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <div>
      <Skeleton className={classes.skeleton} variant="rect" fitContent />
    </div>
  );
};

export default Loading;
