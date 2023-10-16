import React, { useState } from "react";
import { navData } from "./navData";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [data, setData] = useState(navData);
  return (
    <Card sx={{ bgcolor: "green", margin: "10px" }}>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <Grid item xs={2.5}>
                <Link to={item.path}>
                  <Button color="warning" variant="contained" fullWidth>
                    {item.label}
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};
