import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
    const [nomeUsuario, setNomeUsuario] = useState("");

    return (
        <>
            <input
                className="user-input"
                type="text"
                onBlur={(e) => setNomeUsuario(e.target.value)}
                placeholder="Digite o usuário do GitHub"
            />

            {nomeUsuario.length > 4 && (
                <>
                    <Perfil nomeUsuario={nomeUsuario} />
                    <ReposList nomeUsuario={nomeUsuario} />
                </>
            )}

            {/* <Formulario /> */}
        </>
    );
}

export default App;
