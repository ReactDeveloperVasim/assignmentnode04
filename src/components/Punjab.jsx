import { CardContent, Grid, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Punjab = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:5020/punj");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 style={{ textAlign: "center", color: "red" }}>
        Punjab Cities
        </h1>
      </Grid>

      {data.map((item) => (
        <Grid item xs={4}>
          <Card sx={{ bgcolor: "orange" }}>
            <CardContent>
              <h1 style={{ textAlign: "center" }}>{item}</h1>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Punjab;
