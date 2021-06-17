import React, { useState } from 'react'

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';
import YoutubePlayer from './components/YTplayer/YoutubePlayer';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  },
  {
    label: 'The color Green',
    value: 'green'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header></Header>
      <Route path="/">
        <Accordion items={items}></Accordion>
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="select a color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/ytplayer">
        <YoutubePlayer />
      </Route>
    </div>
  )
}

export default App;