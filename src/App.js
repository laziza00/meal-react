import  {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Meal from './container/Meal';


import './App.css';

class App extends Component { 
  render() {
  return (
    <div className="App">
      <Layout>
        <Meal></Meal>
      </Layout>
    </div>
  );
}
}

export default App;
