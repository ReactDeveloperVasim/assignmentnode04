import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Grid, CardContent } from "@mui/material";
const Maha = () => {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("http://localhost:5020/mh");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center",color:"red" }}>Maharashtra Cities</h1>
        </Grid>

        {data.map((item) => (
          <Grid item xs={4}>
            <Card sx={{ bgcolor: "orange" }}>
              <CardContent>
                <h1 style={{textAlign:"center",color:"white"}}>{item}</h1>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Maha;
