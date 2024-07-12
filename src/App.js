import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.tsx'
import Card from './components/card/card.tsx'
import Wrapper from './components/wrapper/wrapper.tsx'

import bauman_logo from "./icons/bauman_logo.svg"

function App() {
  return (
    <Wrapper className="App">
      <Header />
      <Card title = {"Капец тут тайтл"} desc = {"А описание еще интереснее"} photo = {bauman_logo} />
    </Wrapper>
  );
}

export default App;
