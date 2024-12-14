"use client"

import styles from "./style.module.css"
import Link from "next/link"

export default function CardButton() {
    return(
        <div className={styles.container}>
            <p className={styles.text}>Lihat Semua</p>
            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_188_27)">
                <path d="M9.03877 0.425781L7.83327 1.65905L15.7056 9.70188H0.0666504V11.364H15.7056L7.83327 19.4085L9.03877 20.6401L18.9333 10.5329L9.03877 0.425781Z" fill="#444444"/>
                </g>
                <defs>
                <clipPath id="clip0_188_27">
                <rect width="18.8667" height="20.2143" fill="white" transform="translate(0.0666504 0.425781)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}