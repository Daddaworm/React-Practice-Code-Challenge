import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushis: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          sushis: data
        })
      })
  }

  //HOW TO SET UP HOOK IF THIS WAS A FUNCTIONAL COMPONENT
  // const [sushi, setSushi] = useState([])

  // const fetchSushi = () => {
  //   fetch('http://localhost:3000/sushis')
  //   .then(resp => resp.json())
  //   .then(data => setSushi(data))
  // }
  // useEffect(fetchSushi, [])
  // console.log(sushi)

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}/>
        <Table />
      </div>
    );
  }
}

export default App;