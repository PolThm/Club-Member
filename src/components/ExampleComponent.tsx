import React, { Component } from 'react';
import axios from "axios";

class ExampleComponent extends Component {
  state = {
    database: []
  }

  componentDidMount() {
    this.fetchDB();
  }

  fetchDB = async () => {
    const result = await axios(
      'http://www.json-generator.com/api/json/get/bQrQrLgMEi?indent=2',
    );
    this.setState({database: result.data})
    console.log(this.state.database)
  }

  // ...
  render () {
    return (
      <div>
      </div>
    );
  }
}

export default ExampleComponent;
