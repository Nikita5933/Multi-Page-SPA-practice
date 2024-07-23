import classes from "./ContactsModule.module.css";

export default function Contacts() {
    return (
        <>
            <table className={classes.iksweb}>
                <tbody>
                <tr>
                    <td className={classes.ikswebMain} colSpan="2">Contact information</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>New York City, 1st Avenue st. 34 building</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>+1 111 222-34-55</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>someEmail@hmail.com</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}