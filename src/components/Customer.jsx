import React, { useState } from "react";
import {
 
  Typography,
  Box,
  Button,
  
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Customer(props) {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const getData = (e) => {
    setData(e.target.value);
    setPrint(false);
  };

  return (
    <Box
      className="block col-2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "2rem",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        style={{ fontSize: 60 }}
      >
        RESTAURANT APP
      </Typography>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "2rem",
        }}
      >
    
        <Button
          component={Link}
          to="/add"
          variant="contained"
          color="primary"
          style={{ margin: "2rem" }}
        >
          Resturant Management
        </Button>
      </form>
    </Box>
  );
}
