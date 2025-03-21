export const MiLogin=()=>{/*Siempre Pascal Case!!!*/ 
    return(
      <div className="ProductCard">
        <h1>Crea tu cuenta</h1>
        <h4>Ingresa tu información en el registro.</h4>
        <form>
          <label>Nombre</label>
          <input type="text" placeholder="nombre"/>
      
          <label>Apellido</label>
          <input type="text" placeholder="apellido"/><br /><br />
  
          <label>Email</label><br />
          <input type="email" placeholder="correo electrónico"/><br /><br />
  
          <label>Teléfono</label><br />
          <input type="tel" placeholder="correo electrónico"/><br /><br />
  
          <label>Password</label><br />
          <input type="password" placeholder="contraseña"/><br /><br />
  
          <label>Confirma pass</label><br />
          <input type="password" placeholder="confirma contraseña"/><br /><br />
  
          <input type="submit" value="Registrarse" />
  
        </form>
      </div>
    )};
