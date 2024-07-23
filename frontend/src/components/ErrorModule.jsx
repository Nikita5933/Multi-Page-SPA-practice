import classes from "./ErrorModule.module.css";

export default function Error({title, children}) {
    return (
        <div className={classes.error}>
            <img className={classes.error} src="https://avatars.mds.yandex.net/i?id=82e4099efc4efd9263b1b3645ac9b2fc02b7da7d-3520543-images-thumbs&n=13" alt="error"/>
            <h1 className={classes.error}>{title}</h1>
            {children}
        </div>
    );
}