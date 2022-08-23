import styles from '/styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

const User = ({user}) => {
    return (
        <MainContainer  keywords={`user user_id/${user.id} user_name/${user.name}`} tittle={user.name} >
            <div className={styles.user}>
                <h1>User with id: {user.id}</h1>
                <h1>User with name: {user.name}</h1>
            </div>
        </MainContainer>
    );
};

export default User;

export async function getServerSideProps({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user =  await response.json()
    return {
        props: {user},
    }
}
