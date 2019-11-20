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

  renderModalEdit() {
    return (
      <>
        <button
          type="hidden"
          className="d-none"
          data-toggle="modal"
          data-target="#modal"
          id="btnOpenModal"
        ></button>
        <div
          className="modal fade"
          id="modal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
                <form>
                  <h6 className="heading-small text-muted mb-4">
                    Información del idioma
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Nombre
                          </label>
                          <input
                            name="id"
                            type="hidden"
                            className="d-none"
                            onChange={this.inputHandler}
                          />
                          <input
                            name="name"
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            onChange={this.inputHandler}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn-cancel-agromapp mr-3"
                      data-dismiss="modal"
                      id="closeModal"
                    >
                      Cancelar
                    </button>
                    <button type="submit" className="btn-success-agromapp">
                      Guardar
                    </button>
                    <button type="submit" className="btn-success-agromapp">
                      Actualizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
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
                          className="btn btn-xs btn-default"
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
        {this.renderModalEdit()}
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
