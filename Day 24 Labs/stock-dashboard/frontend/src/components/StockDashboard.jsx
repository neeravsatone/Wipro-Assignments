import React, { Component } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

class StockDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stocks: {},
      filteredStocks: {},
      loading: true,
      symbol: "",
      previousSearches: []
    };
  }

  componentDidMount() {

    fetch("http://localhost:5000/stocks")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          stocks: data,
          filteredStocks: data,
          loading: false
        });
      });

    const savedSearches = JSON.parse(localStorage.getItem("searches")) || [];

    this.setState({
      previousSearches: savedSearches
    });

    socket.on("stockUpdate", (updatedStocks) => {
      this.setState({
        stocks: updatedStocks,
        filteredStocks: updatedStocks
      });
    });

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.previousSearches !== this.state.previousSearches) {
      localStorage.setItem(
        "searches",
        JSON.stringify(this.state.previousSearches)
      );
    }

  }

  handleChange = (event) => {
    this.setState({ symbol: event.target.value });
  };

  handleSearch = () => {

    const { symbol, stocks, previousSearches } = this.state;

    if (symbol.trim() === "") {
      this.setState({ filteredStocks: stocks });
      return;
    }

    const filtered = {};

    Object.keys(stocks).forEach((key) => {
      if (key.toLowerCase().includes(symbol.toLowerCase())) {
        filtered[key] = stocks[key];
      }
    });

    const updatedSearches = [...new Set([symbol, ...previousSearches])];

    this.setState({
      filteredStocks: filtered,
      previousSearches: updatedSearches,
      symbol: ""
    });

  };

  render() {

    const { filteredStocks, loading, symbol, previousSearches } = this.state;

    return (
      <div className="container mt-5">

        <h1 className="text-center mb-4">
          Stock Market Dashboard
        </h1>

        <div className="card p-4 shadow">

          <div className="mb-3 d-flex">

            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter Stock Symbol"
              value={symbol}
              onChange={this.handleChange}
            />

            <button
              className="btn btn-primary"
              onClick={this.handleSearch}
            >
              Search
            </button>

          </div>

          <h3>Live Stock Prices</h3>

          <ul className="list-group mt-3">

            {loading ? (
              <li className="list-group-item">Loading stock data...</li>
            ) : Object.keys(filteredStocks).length === 0 ? (
              <li className="list-group-item">No stock found</li>
            ) : (
              Object.keys(filteredStocks).map((stockSymbol) => (
                <li
                  key={stockSymbol}
                  className="list-group-item d-flex justify-content-between"
                >
                  {stockSymbol}
                  <span>${filteredStocks[stockSymbol]}</span>
                </li>
              ))
            )}

          </ul>

        </div>

        <div className="card p-4 shadow mt-4">

          <h4>Previous Searches</h4>

          {previousSearches.length === 0 ? (
            <p>No previous searches</p>
          ) : (
            <ul className="list-group">
              {previousSearches.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          )}

        </div>

      </div>
    );
  }
}

export default StockDashboard;