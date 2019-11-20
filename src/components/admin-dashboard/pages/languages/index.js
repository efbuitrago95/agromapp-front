import React, { Component } from "react";
import {
  PageContainerLayout,
  PageHeaderLayout,
  PaginationLayout
} from "../../../layouts";
import { connect } from "react-redux";
import { languagesOperations } from "../../../../state/ducks/languages";
import { InputSearchLayout } from "../../../layouts/input-search";
import { LanguagesTable } from "../../containers/languages-table";

const stateInitial = {
  languages: [],
  params: {
    page: 1,
    search: ""
  },
  language: {
    id: "",
    name: ""
  },
  error: false
};

class LanguagesPage extends Component {
  constructor(props) {
    super(props);

    this.state = { ...stateInitial };

    this.updateParams = this.updateParams.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.fetchLanguages = this.fetchLanguages.bind(this);
    this.onLanguagesDataChange = this.onLanguagesDataChange.bind(this);
    this.onPaginationChange = this.onPaginationChange.bind(this);
    this.fetchLanguages();
  }

  onPaginationChange(page) {
    this.updateParams("page", page);
  }

  onLanguagesDataChange(name, value) {
    console.log(name, value);
    this.setState({
      language: {
        ...this.state.language,
        [name]: value
      }
    });
  }

  fetchLanguages() {
    this.props.fetchLanguages(this.state.params);
  }

  updateParams(key, value) {
    const { params } = this.state;
    params[key] = value;
    if (key === "search") {
      params["page"] = 1;
    }
    this.setState(
      {
        params: params
      },
      () => this.fetchLanguages()
    );
  }

  onSearchChange(keywork) {
    this.updateParams("search", keywork);
  }

  renderHeaderPaths() {
    return (
      <>
        <li>
          <button className="btn btn-minw btn-rounded btn-success">
            Agregar idioma <i className="fas fa-plus"></i>
          </button>
        </li>
      </>
    );
  }

  render() {
    return (
      <>
        <PageContainerLayout>
          <PageHeaderLayout
            title={"Idiomas"}
            subTitle={"Todos los idiomas"}
            paths={this.renderHeaderPaths}
          />
          <div className="content content-boxed">
            <div
              className={
                " block block-themed block-opt-refresh-icon7 " +
                (this.props.isLoading ? " block-opt-refresh " : "")
              }
            >
              <div className="block-header bg-primary">
                <ul className="block-options">
                  <li>
                    <button type="button" onClick={this.fetchLanguages}>
                      <i className="si si-refresh"></i>
                    </button>
                  </li>
                </ul>
                <h3 className="block-title">Todos los idiomas</h3>
              </div>
              <div className="block-content">
                {/* Search */}
                <InputSearchLayout onSearchChange={this.onSearchChange} />
                {/* End Search */}
                <LanguagesTable
                  languagesList={this.props.languages}
                  onChangeLanguage={this.onLanguagesDataChange}
                >
                  {/* Pagination */}
                  <PaginationLayout
                    pagination={this.props.paginationData}
                    onPaginationChange={this.onPaginationChange}
                  />
                  {/* End Pagination */}
                </LanguagesTable>
                {/* End Table */}
              </div>
            </div>
          </div>
        </PageContainerLayout>
      </>
    );
  }
}

// Set defaultProps
LanguagesPage.defaultProps = {
  languages: {}
};

// mapStateToProps
const mapStateToProps = state => ({
  isLoading: state.languages.fetchLanguagesReducer.loading,
  languages: state.languages.fetchLanguagesReducer.data.results,
  paginationData: state.languages.fetchLanguagesReducer.data.paginationData
});

// mapStateToProps
const mapDispatchToProps = {
  fetchLanguages: languagesOperations.list
};

// Export Class
const _LanguagesPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguagesPage);
export { _LanguagesPage as LanguagesPage };
