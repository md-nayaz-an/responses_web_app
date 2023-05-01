import * as React from 'react';
import { useState, useEffect } from 'react';
import { Paper, Stack, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: 280,
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}));


export default function LeftPane(props) {

  const {data, setData, selected, setSelected, ...rest} = props;
  useEffect(() => {
    setData(data);
    return
  }, [data]);

  return (
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        height="100%"
        flexWrap="wrap"
        alignContent="flex-start"
        style={{overflowX:"scroll", padding: '0% 2% 0%'}}
      >
        {
          data.map((lib) =>{
            return(<ItemComp 
                      selected={selected}
                      setSelected={setSelected}
                      idx={lib.id}
                      key={lib.id}
                    >
                      {lib.libName}
                    </ItemComp>)
          })
        }
        <AddNewItemComp
          data={data}
          setData={setData}
          selected={selected}
          setSelected={setSelected}
          idx={-1}
          key={-1}
        />
      </Stack>
  );
}

function ItemComp(props) {
  
  const { selected, setSelected, ...rest } = props;
  const [hover, setHover] = useState(2);
  const [click, setClick] = useState(false);

  const theme = useTheme();

  const onClick = () => {
    setClick(true);
    props.setSelected(props.idx);
  }

  useEffect(() => {
    if(props.selected !== props.idx)
      setClick(false);
    return
  }, [props.selected])
  return(
    <Item
      {...rest}
      onMouseEnter={() => setHover(5)}
      onMouseLeave={() => setHover(2)}
      onClick={() => onClick()}
      elevation={hover}
      sx={{
        border: (click) ? '2px solid' : '',
        borderColor: theme.palette.primary.main,
      }}
    >
      {props.children}
    </Item>
  )
}

function AddNewItemComp(props) {
  const [click, setClick] = useState(false);
  const [input, setInput] = useState('');

  const addNew = () => {
    const newdata = {
      'id': props.data.length ,
      'libName': input,
      'lib': [
        {
          'name': 'new',
          'url': 'new'
        }
      ]
    }
    let temp = [...props.data];
    temp.push(newdata);
    props.setData(temp);
    setInput('')
  }
  
  return(
    <ItemComp
      onMouseOver={() => setClick(true)}
      onMouseOut={() => setClick(false)}
      selected={props.selected}
      setSelected={props.setSelected}
      idx={props.idx}
    >
      {
        click && 
        <>
          <TextField
            label="New Library"
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            size="small"
            onClick={addNew}
          >
            Create
          </Button>
        </>
      }
      
      {(!click) && <AddCircleIcon fontSize='large'/>}
    </ItemComp>
  )
}