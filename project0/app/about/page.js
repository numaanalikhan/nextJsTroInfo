import Link from "next/link"
import style from '@/app/about/styles.module.css'
function About (){
    return(
    <>
    <div className={style.main}>
        <h1>
            Hello every one this is About Route Page
        </h1>
        <Link href={'/'}>Go to Home Page</Link>
    </div>
    </>)
}

export default About