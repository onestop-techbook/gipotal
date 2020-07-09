import React from 'react' // React というでかいすべてを取ってくる
import { useRouter } from 'next/router' // useRouter という単体の関数を取ってくる
import { NextPage } from 'next' // NextPage という単体の型を取ってくる
import Link from 'next/link'
import styles from './index.module.css'

const Header: React.FC = () => {
    return <header>
        <img src="/images/logo.svg" />
        <Link href="/signup">
            <a className={[styles.blackButton,styles.button].join(' ')} >
                新規登録
            </a>
        </Link>
        <Link href="/login">
            <a className={[styles.whiteButton,styles.button].join(' ')}>
                ログイン
            </a>
        </Link>
    </header>
}

const CirclesShow: NextPage = () => {
    // const router = useRouter()
    // const { id } = router.query

    return <Header />
}

export default CirclesShow


