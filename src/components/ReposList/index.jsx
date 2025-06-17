import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((resJson) => {
                setTimeout(() => {
                    setError(false);
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch((err) => {
                setError(true);
                console.log(`Erro mesmo! ${err}`);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {error ? (
                <h1>Erro ao carregar os repositórios</h1>
            ) : (
                <>
                    {estaCarregando ? (
                        <h1>Carregando...</h1>
                    ) : (
                        <ul className={styles.list}>
                            {/* {repos.map((repositorio) => ( */}
                            {repos.map(({ id, name, language, html_url }) => (
                                <li key={id} className={styles.listItem}>
                                    <div className={styles.itemName}>
                                        <b>Nome:</b> {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b> {language}
                                    </div>

                                    <a
                                        className={styles.itemLink}
                                        target="_blank"
                                        href={html_url}
                                    >
                                        Visitar no Github
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default ReposList;
