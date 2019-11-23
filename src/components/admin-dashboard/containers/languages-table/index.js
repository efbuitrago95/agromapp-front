import React, { Component } from "react";
import { EmptyTableLayout } from "../../../layouts";

class LanguagesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.editLanguage = this.editLanguage.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  editLanguage(language) {
    this.setState({ language });
    document.getElementById("btnOpenModal").click();
  }

  inputHandler(event) {
    this.props.onChangeLanguage(event.target.name, event.target.value);
  }

  render() {
    return (
      <>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-condensed text-center">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Nombre</th>
                <th className="text-center">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.languagesList.map(language => {
                return (
                  <tr key={language.id}>
                    <td className="text-center">{language.id}</td>
                    <td className="text-center">{language.name}</td>
                    <td className="text-center">
                      <div className="btn-group">
                        <button
                          className="btn btn-xs bg-none"
                          type="button"
                          data-toggle="tooltip"
                          title="Editar"
                          onClick={this.editLanguage.bind(this, language)}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              <EmptyTableLayout
                results={this.props.languagesList}
                columns={3}
              />
            </tbody>
          </table>
          {this.props.children}
        </div>
      </>
    );
  }
}

// Set defaultProps
LanguagesTable.defaultProps = {
  languagesList: [],
  onChangeLanguage: () => {}
};

// Export Class
export { LanguagesTable };
