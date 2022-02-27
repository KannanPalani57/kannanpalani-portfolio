import React from 'react'
import Link from "next/link"
import styles from '../styles/Container.module.css'


function SeeMyWorks() {
    return (
        <div className={styles.container}>
        <h3>See all of my works!</h3>  
        <p>Wanna see all of my works, Visit my Github page.</p>
        <Link href="https://github.com/KannanPalani57" passHref>
            <button className={styles.blackBtn}>My Github Account</button>
        </Link>
    </div>
    )
}

export default SeeMyWorks
