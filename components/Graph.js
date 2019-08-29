import React from "react";
import Counter from "./Counter";

const Graph = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered" style={{ marginBottom: '3rem' }}>Bitcoin impact data</h2>
        <div className="columns">
          <div className="column">
            <iframe
              class="highcharts-iframe"
              style={{ border: 0, width: "100%", height: "420px" }}
              src="https://cloud.highcharts.com/embed/ywoqita/"
              width="300"
              height="150"
            ></iframe>
          </div>
          <div className="column">
            <Counter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
