import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1 className="p-2"> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1 className="p-2 text-black-300 bg-blue-400 mb-10">
          {" "}
          Fetch data from an api in react{" "}
        </h1>{" "}
        {items.map((item) => (
          <ol
            className="space-y-4 mt-2 bg-yellow-400 rounded-xl "
            key={item.id}
          >
            User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
            {item.email}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
