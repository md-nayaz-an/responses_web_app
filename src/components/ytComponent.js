import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";

export default function YtComponent(props) {
  const [playing, setPlaying] = useState(true);
  const [show, setShow] = useState(false)

  const onProgress = (e) => {
    console.log(e.playedSeconds, props.pin)
    if(e.playedSeconds > props.pin) {
      console.log('pause')
      setPlaying(false);
    }
  }

  useEffect(() => {
    console.log(playing)
    return
  }, [playing])

  return (
    <ReactPlayer
      url={props.url}
      onProgress={onProgress}
      playing={playing}
      controls={true}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
    />
  )
}