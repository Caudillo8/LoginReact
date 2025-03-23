import "./MiLogin.css";
import { Icons } from "../Icons/Eye.jsx";
export const MiLogin = () => {
  /*Siempre Pascal Case!!!*/
  return (
    <div className="container">
      <h1>Crea tu cuenta</h1>
      <h4 className="subtitulo">Ingresa tu información en el registro.</h4>
      <form>
        <div className="nombreApellido">
          <div className="datoNombre">
            <label>Nombre</label>
            <input type="text" placeholder="nombre" />
          </div>
          <div className="datoNombre">
            <label>Apellido</label>
            <input type="text" placeholder="apellido" />
          </div>
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label>Email</label>
          <br />
          <input type="email" placeholder="correo electrónico" />
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label>Teléfono</label>
          <br />
          <input type="tel" placeholder="correo electrónico" />
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label>Password</label>
          <br />
          <div className="password-input">
            <input type="password" placeholder="contraseña" />
            <Icons.EyePassword></Icons.EyePassword>
            <br />
            <br />
          </div>
          <div className="div datoLargo">
            <label>Confirma pass</label>
            <br />
            <input type="password" placeholder="confirma contraseña" />
            <Icons.EyePassword></Icons.EyePassword>
            <br />
            <br />
          </div>
        </div>
        <input type="submit" value="Registrarse" className="btn" />
      </form>
    </div>
  );
};
