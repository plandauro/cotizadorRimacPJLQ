import Template from "../component/includes/Template";
import {
  Grid,
  Typography,
  FormControl,
  TextField,
  makeStyles,
  Button,
  Select,
  Link as LinkARef,
} from "@material-ui/core";

import { get_posts } from "../services/cotizador.services";

import { useState } from "react";
import { useHistory } from "react-router";

import Logo from "../assets/images/Logo RIMAC.svg";
import Image1 from "../assets/images/Mask Group.svg";
import Image2 from "../assets/images/image.png";
import { div } from "prelude-ls";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();
  let history = useHistory();

  let initalValue = {
    type: "",
    nrdoc: "",
    numberPhone: "",
    placa: "",
  };

  const [values, setValues] = useState(initalValue);
  const [msgErr, setMsgErr] = useState("");

  const handleChange = (event) => {
    let { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const validForm = (params) => {
    if (params.type === "") {
      setMsgErr("Tipo de documento obligatorio (*)");
      return false;
    }

    if (params.nrdoc === "") {
      setMsgErr("Número de documento obligatorio (*)");
      return false;
    }

    if (params.numberPhone === "") {
      setMsgErr("Número de teléfono obligatorio (*)");
      return false;
    }

    if (params.placa === "") {
      setMsgErr("Placa obligatorio (*)");
      return false;
    }

    setMsgErr("");

    return true;
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (!validForm(values)) {
      return;
    }

    history.push("/armador");
  };

  const ErrForm = () => {
    return (
      <Typography variant="h6" style={{ color: "red" }}>
        {msgErr}
      </Typography>
    );
  };

  return (
    <Template title="Inicio">
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ position: "relative" }}>
          <img
            src={Image1}
            alt="logo"
            style={{
              width: "100%",
              position: "absolute",
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
              zIndex: "-1",
            }}
          />
          <div>
            <img src={Logo} alt="logo" />
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={Image2} alt="portada" />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="Head">
            <Typography>¿Tienes alduna duda?</Typography>
            <Typography>(01) 411 6001</Typography>
          </div>
          <div className="Body">
            <Typography variant="h3">Déjanos tu datos</Typography>

            <ErrForm />
            <FormControl variant="filled">
              <form onSubmit={handleSave} noValidate autoComplete="off">
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Select
                      name="type"
                      native
                      value={values.type}
                      onChange={handleChange}
                      className={classes.textField}
                      variant="outlined"
                      required
                    >
                      <option value={""}>[Selecciona]</option>
                      <option value={"DNI"}>DNI</option>
                      <option value={"Pasaporte"}>Pasaporte</option>
                    </Select>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      name="nrdoc"
                      value={values.nrdoc}
                      onChange={handleChange}
                      className={classes.textField}
                      label="Nro. de doc"
                      variant="outlined"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="numberPhone"
                      value={values.numberPhone}
                      onChange={handleChange}
                      className={classes.textField}
                      label="Celular"
                      variant="outlined"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="placa"
                      value={values.placa}
                      onChange={handleChange}
                      className={classes.textField}
                      label="Placa"
                      variant="outlined"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    Acepto la{" "}
                    <LinkARef href="#">
                      Política de Protecciòn de Datos Personales
                    </LinkARef>{" "}
                    y los <LinkARef href="#">Términos y Condiciones.</LinkARef>
                  </Grid>
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Button type="submit" variant="contained" color="secondary">
                      COTÍZALO
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </Template>
  );
};

export default Home;
