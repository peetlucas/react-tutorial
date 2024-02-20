import logo from './logo.svg';
import './App.css';
// import { PrintHello } from './components/PrintHello';
// import BuildLayout from './components/BuildLayout';
// import HtmlArrays from './components/HtmlArrays';
// import ArrayList from './components/ArrayList';
// import Alert from './components/Alert';
import Jumbotron from './components/Jumbotron';
import Badge from './components/Badge';

function App() {
  return (
    <div className="App">      
      {/* <PrintHello />
      <BuildLayout /> */}
      {/* <HtmlArrays /> */}
      {/* <ArrayList /> */}
      {/* <Alert show={true} text="Oh My! I can't believe electricity is out!" />
      <Alert show={false} text="This alert won't show." /> */}
      <Jumbotron title='Welcome to React'
        description='React is the most popular rendering library.'
        buttonLabel='Go to the official website'
        buttonURL='https://reactjs.org'
      />
      <Badge label="Notifications" number="1" />
    </div>
  );
}

export default App;
