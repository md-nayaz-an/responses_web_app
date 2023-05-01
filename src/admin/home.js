import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState } from "react";
import LeftPane from "./library";
import RightPane from "./addData";

export default function Home() {

  let initdata = [
    {
      'id': 0,
      'libName': "Shark Tank",
      'lib': [
        {

          'name': 's01e01',
          'keyValue': {
            'url': 'https://youtu.be/PWdyIYnQM6s',
          },
          'prompt': 'Predict the final accepted Deal',
          'options': ['₹75 lakhs for 16% equity',
                      '₹50 lakhs for 12% equity',
                      '₹75 lakhs for 12% equity',
                      '₹70 lakhs for 2.75% equity '],
          'responses': []
        },
        {
          'name': 's01e02',
          'keyValue': {
            'url': 'https://youtu.be/53MGqjg8POQ',
          },
          'prompt': 'Predict the final accepted Deal',
          'options': [],
          'responses': []
        },
      ]
    }
  ];

  const [data, setData] = useState(initdata);
  const [selected, setSelected] = useState(0);

  return(
    <PanelGroup autoSaveId='group' direction="horizontal"
      style={{
        height: '100%',
      }}>
      <Panel defaultSize={50}
      style={{
        }}>
        <LeftPane data={data} setData={setData} selected={selected} setSelected={setSelected}/>
      </Panel>
      <PanelResizeHandle
        style={{
          display: 'flex',
          alignContent:'center',
          flexWrap: 'wrap'
        }}>
        <DragHandleIcon style={{transform: 'rotate(90deg)'}}/>
      </PanelResizeHandle>
      <Panel>
        <RightPane data={data} setData={setData} selected={selected}/>
      </Panel>
    </PanelGroup>
  )
}