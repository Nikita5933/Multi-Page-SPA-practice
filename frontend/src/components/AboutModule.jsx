import classes from "./AboutModule.module.css";

export default function About() {
    return (<>
        <h1 className={classes.title}>About Page</h1>
        <p className={classes.text}>List of our products</p>
        <div className={classes.wrapper}><ul></ul></div>
    </>)
}