import React, { Component } from "react";

class PaginationLayout extends Component {
  state = {
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ currentPage: this.props.pagination.currentPage });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.pagination.currentPage !== this.state.currentPage) {
      this.setState({ currentPage: nextProps.pagination.currentPage });
    }
  }

  previousPage() {
    if (this.props.pagination.currentPage >= 1) {
      const page = this.props.pagination.currentPage - 1;
      this.changePagination(page);
    }
  }

  nextPage() {
    const page = this.props.pagination.currentPage + 1;
    this.changePagination(page);
  }

  onPageChange(e) {
    this.setState({ currentPage: e.target.value });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.changePagination(this.state.currentPage);
    }
  };

  changePagination(page) {
    if (page > 0 && page <= this.props.pagination.totalPages) {
      this.props.onPaginationChange(page);
    }
  }

  render() {
    const var1 =
      this.props.pagination.totalItemsOnPage *
        (this.props.pagination.currentPage - 1) +
      1;
    const var2 =
      this.props.pagination.totalItemsOnPage *
        (this.props.pagination.currentPage - 1) +
      this.props.pagination.totalItemsOnPage;
    const var3 =
      var2 > this.props.pagination.totalItems
        ? this.props.pagination.totalItems
        : var2;
    return (
      <>
        {this.props.pagination.totalItems &&
        this.props.pagination.totalPages >= 1 ? (
          <nav>
            <ul className="pagination justify-content-center">
              <li className="previous">
                <button
                  className="cursor-pointer"
                  onClick={this.previousPage.bind(this)}
                  disabled={!this.props.pagination.previousPage}
                >
                  Anterior
                </button>
              </li>
              <li>
                <span>
                  {this.props.pagination.currentPage === 1 ? 1 : <>{var1}</>} -{" "}
                  {var3}
                  &nbsp;de&nbsp;{this.props.pagination.totalItems}
                  &nbsp;Resultados.
                </span>
              </li>
              <li className="next">
                <button
                  className="cursor-pointer"
                  onClick={this.nextPage.bind(this)}
                  disabled={!this.props.pagination.nextPage}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        ) : null}
      </>
    );
  }
}

PaginationLayout.defaultProps = {
  pagination: { totalItems: 0 },
  onPaginationChange: function() {},
  totalPages: 0
};

export { PaginationLayout };
