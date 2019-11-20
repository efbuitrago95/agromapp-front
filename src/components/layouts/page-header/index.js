import React, { Component } from "react";

class PageHeaderLayout extends Component {
  render() {
    return (
      <>
        <div className="content bg-gray-lighter">
          <div className="row items-push">
            <div className="col-sm-7">
              <h1 className="page-heading">
                {this.props.title} <small>{this.props.subTitle}</small>
              </h1>
            </div>
            <div className="col-sm-5 text-right hidden-xs">
              <ol className="breadcrumb push-10-t">{this.props.paths()}</ol>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// Set defaultProps
PageHeaderLayout.defaultProps = {
  title: null,
  subTitle: null,
  paths: () => null
};

export { PageHeaderLayout };
