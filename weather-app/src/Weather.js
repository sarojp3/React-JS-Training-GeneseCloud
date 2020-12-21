import React from "react";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

export default function Weather({ data, icon }) {
  const { main, name, sys } = data;

  return (
    <Card style={{padding:10, width:'46%',marginLeft:400, marginTop:35, backgroundColor:'#D5DFE1', borderRadius:10, boxShadow:'2px 2px gray'}}>
    <div style={{color:'#eb6e4b', fontSize:15, marginTop:5, textAlign:'center'}}>
        {new Date().toDateString()}
    </div>
    <div style={{fontSize:20, fontWeight:'bolder',marginTop:7, textAlign:'center'}}>
        {name},{sys.country}
    </div>
    <Grid container  spacing={2} style={{marginTop:5, marginLeft:45}}>
        <Grid item xs="3" sm="2"style={{marginTop:5}}>
            <div style={{textDecoration:'underline', padding:10}}>Temperature</div>
            <div style={{marginLeft:30}}>{main.temp}&deg;C</div>
        </Grid>
        <Grid item xs="3" sm="2" style={{marginTop:5}}>
            <div style={{textDecoration:'underline', padding:10}}>Min Temp</div>
            <div style={{marginLeft:30}}>{main.temp_min}&deg;C</div>
        </Grid>
        <Grid item xs="3" sm="2" style={{marginTop:5}}>
            <div style={{textDecoration:'underline', padding:10}}>Max Temp</div>
            <div style={{marginLeft:30}}>{main.temp_max}&deg;C</div>
        </Grid>
        <Grid item xs="3" sm="2" style={{marginTop:5}}>
            <div style={{textDecoration:'underline', padding:10}}>Pressure</div>
            <div style={{marginLeft:20}}>{main.pressure}</div>
        </Grid>
        <Grid item xs="3" sm="2" style={{marginTop:5}}>
            <div style={{textDecoration:'underline', padding:10}}>Humidity</div>
            <div style={{marginLeft:30}}>{main.humidity}</div>
        </Grid>

    </Grid>
    </Card>
  );
}