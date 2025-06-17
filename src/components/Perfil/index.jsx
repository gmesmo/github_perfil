import styles from "./Perfil.module.css";

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img
                src={`https://github.com/${nomeUsuario}.png`}
                alt="Foto de perfil"
                className={styles.avatar}
            />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    );
};

export default Perfil;
