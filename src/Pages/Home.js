import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { studentsActions } from "../Actions";
import "./Home.css";
const Home = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Students.students);
  useMemo(() => dispatch(studentsActions.getStudents()), []);

  console.log(students);

  return (
    <section id="tabs" className="project-tab mt-3">
      <div className="container">
        <div className="home row">
          <div className="col-md-12">
            <nav>
              <div
                className="nav nav-tabs nav-fill mb-3"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  {t("Tabs.All")}
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  {t("Tabs.Under Review")}
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  {t("Tabs.Initial Acceptance")}
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  {t("Tabs.Conditional Acceptance")}
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  {t("Tabs.Rejected")}
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <table className="table" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>{t("Headers.Name")}</th>
                      <th>{t("Headers.Status")}</th>
                      <th>{t("Headers.Major")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => {
                      return (
                        <tr key={student._id}>
                          <td>
                            <i
                              className="awesome user fa fa-user"
                              style={{ color: "#4AC2CA" }}
                              aria-hidden="true"
                            ></i>
                            {student.Name}
                          </td>
                          <td>{student.Status}</td>
                          <td>{student.Major}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <table className="table" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>{t("Headers.Name")}</th>
                      <th>{t("Headers.Status")}</th>
                      <th>{t("Headers.Major")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="#"></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="tab-pane"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <table className="table" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>{t("Headers.Name")}</th>
                      <th>{t("Headers.Status")}</th>
                      <th>{t("Headers.Major")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>

                      <td></td>
                      <td>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>

                      <td></td>
                      <td>
                        <a href="#"></a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>

                      <td></td>
                      <td>
                        <a href="#"></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
