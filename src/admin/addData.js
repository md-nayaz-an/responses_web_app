import { Key } from "@mui/icons-material";
import { Divider, Paper, Stack, styled, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RightPane (props) {
  const [libData, setLibData] = useState(props.data[0]);
  useEffect(() => {
    
    if(props.selected === -1)
      setLibData(props.data[0])
    else
      setLibData(props.data[props.selected]);

    return
  }, [props.selected]);

  if(props.selected !== -1)
    return(
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
        padding={2}
      >
      {
        libData.lib.map((vals, idx) => {
          return(
            <ItemComp key={idx} elevate={true}>
            <Grid container spacing={2}>
              <GridItem xs={12}>
                {vals.name}
              </GridItem>
              <GridItem xs={12}>
                {vals.prompt}
              </GridItem>

              <Grid item xs={12}>
                <Divider orientation="horizontal" textAlign="left" flexItem>options</Divider>
              </Grid>
              {
                vals.options.map((options,idx) => {
                  return <GridItem indent={1} rightIndent xs={8}>{options}</GridItem>
                })
              }
              <Grid item xs={12}>
                <Divider orientation="horizontal" textAlign="left" flexItem>Key Values</Divider>
              </Grid>
              {
                Object.keys(vals.keyValue).map((key, value) => {
                  return (
                    <>
                      <GridItem indent={1} xs={4}>{key}</GridItem>
                      <GridItem xs={6}>{vals.keyValue[key]}</GridItem>
                    </>
                  )
                })
              }
            </Grid>
            </ItemComp>
          )
        })
      }
      </Stack>
    )
}

function GridItem(props){
  return(
    <>
      {props.indent && <Grid item xs={props.indent}></Grid>}
      <Grid item xs={props.xs}><Item>{props.children}</Item></Grid>
      {props.rightIndent && <Grid item xs={12 - props.xs - props.indent}></Grid>}
    </>
  )
}

function ItemComp({elevate=false, ...props}) {
  const [hover, setHover] = useState(2);
  return(
    <Item
      {...props}
      onMouseEnter={() => setHover(5)}
      onMouseLeave={() => setHover(2)}
      elevation={(elevate) ? hover : 2}
      style={{
        margin: 5
      }}
    >
      {props.children}
    </Item>
  )
}