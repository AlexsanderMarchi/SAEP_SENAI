import { useNavigate } from "react-router-dom";
import '../style/professor.css'

const PaginaProfessor = () => {
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   console.log("Logout");
  //   navigate("/login");
  // };

  // {/* <button onClick={handleLogout}>Logout</button> */}

  return (
    <div className="default-pages-template">
      <header className="header-pagina-professor">
        <h1>Bem vindo, Professor </h1>
        
      </header>
      <div>
        <p>Vamos fazer um template de página de clientes.</p>
      </div>
      <div className="buttonLightMode">
      </div>
    </div>
  );
};

export default PaginaProfessor;
