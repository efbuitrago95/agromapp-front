import React, { Component } from "react";

class DashboardHeaderLayout extends Component {
  render() {
    return (
      <>
        <div className="content bg-image overflow-hidden">
          <div className="push-50-t push-15">
            {this.props.showImage ? (
              <div className="push-15-r pull-left animated fadeIn">
                <img
                  className="img-avatar img-avatar-thumb"
                  src={this.props.imageSrc}
                  alt=""
                />
              </div>
            ) : null}
            <h1 className="h2 text-white animated zoomIn">
              {this.props.title}
            </h1>
            <h2 className="h5 text-white-op animated zoomIn">
              {this.props.subTitle}
            </h2>
          </div>
        </div>
      </>
    );
  }
}

// Set defaultProps
DashboardHeaderLayout.defaultProps = {
  title: null,
  subTitle: null,
  showImage: false,
  imageSrc: ""
};

export { DashboardHeaderLayout };
