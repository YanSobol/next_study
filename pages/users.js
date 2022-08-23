import styles from '/styles/Users.module.scss'
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer keywords={'users'} tittle={'Users'}>
            <h1>List of users: </h1>
            <ul>
                {users.map((user) =>
                    <li key={user.id} className={styles.li_item}>
                        <Link href={`/users/${user.id}`}>
                            <a>{`ID: ${user.id} name: ${user.name}`}</a>
                        </Link>
                    </li>

                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users =  await response.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
