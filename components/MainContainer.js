import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords, tittle}) => {

    return (
        <>
            <Head>
                <meta keywords={keywords}/>
                <title>{tittle}</title>
            </Head>
            <nav className={'navbar'}>
                <A href={'/'} text={'main'}/>
                <A href={'/users'} text={'users'}/>
            </nav>
            <div className={'children'}>
                {children}
            </div>
        </>
    )
}

export default MainContainer;
