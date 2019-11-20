import React, { Component } from "react";

class EmptyTableLayout extends Component {
  render() {
    const rows = [];
    const columns = [];
    for (let i = 0; i <= 4; i++) {
      let obj = {};
      rows.push(obj);
    }
    for (let i = 1; i <= this.props.columns; i++) {
      let obj = {};
      columns.push(obj);
    }

    return (
      <>
        {this.props.results.length <= 5
          ? rows.map((r, index) => {
              return (
                <tr key={index}>
                  {columns.map((c, index) => {
                    return (
                      <th className="text-center" key={index}>
                        &nbsp;
                      </th>
                    );
                  })}
                </tr>
              );
            })
          : null}
      </>
    );
  }
}

// Set defaultProps
EmptyTableLayout.defaultProps = {
  results: [],
  columns: 10
};

export { EmptyTableLayout };
