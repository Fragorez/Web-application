import React from "react";
import { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  ONLINEFORM_ROUTE,
  RECORDS_ROUTE,
} from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {user.isAuth && user.isAdmin ? (
          <NavLink
            className={"mr-5"}
            style={{ color: "white" }}
            to={RECORDS_ROUTE}
          >
            Расписание
          </NavLink>
        ) : (
          <NavLink
            className={"mr-5"}
            style={{ color: "white" }}
            to={ONLINEFORM_ROUTE}
          >
            Записаться
          </NavLink>
        )}

        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            {user.isAdmin ? (
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Панель администратора
              </Button>
            ) : (
              <text></text>
            )}

            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
