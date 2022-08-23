import Link from "next/link";
import style from '/styles/A.module.css'

const A = ({href, text}) => {
    return (
        <Link href={href}>
            <a className={style.link}>{text}</a>
        </Link>
    );
};



export default A;

// If we use simple <a> tag to routing, the browser will make reload, so to not reload browser we use <Link>
// <div className={'navbar'}>
//     <Link href={'/'}>
//         <a className={'link'}>main</a>
//     </Link>
//     <Link href={'/users'}>
//         <a  className={'link'}>users</a>
//     </Link>
//        <a href={'/'}>main</a>
//        <a href={'/users'} style={{padding: 15}}>users</a>
// </div>
