import YtComponent from "./components/ytComponent";
import PollComponent from "./components/pollComponent";

import Home from "./admin/home";

export default function App() {
  var data = {
    question: 'Offered Deal',
    results: [
      {option: '₹75 lakhs for 16% equity', votes: 5},
      {option: '₹50 lakhs for 12% equity', votes: 2},
      {option: '₹75 lakhs for 312% equity', votes: 1},
      {option: '₹70 lakhs for 2.75% equity ', votes: 1},
    ]
  }

  var videoURL = [
    { url: "https://youtu.be/PWdyIYnQM6s", pin: 725}
  ]

  /*
  return(
    <>
      <YtComponent
        url={videoURL[0].url}
        pin={videoURL[0].pin}
      />
      <PollComponent
        data={data}
      />
    </>
  )
  */
  
  return(
    <Home />
  )
}