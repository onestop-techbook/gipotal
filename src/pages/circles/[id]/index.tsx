import React from 'react' // React というでかいすべてを取ってくる
import { useRouter } from 'next/router' // useRouter という単体の関数を取ってくる
import { NextPage } from 'next' // NextPage という単体の型を取ってくる
import Link from 'next/link'
import styles from './index.module.css'
import { Item, ItemProps} from '@/components/item-cell'

const Header: React.FC = () => {
    return <header className={styles.header}>
        <nav className={styles.headerNav}>
            <Link href="/">
                <a className={styles.logoWrapper} >
                    <img className={styles.logo} src="/images/logo.svg" />
                </a>
            </Link>
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
        </nav>
        <h1 className={styles.circleName}>親方Project</h1>
    </header>
}

type MainProps = {
    circleDesciption: string
}
const Main: React.FC<MainProps>  = ({circleDesciption}) => {
    const items: ItemProps[] = [
        {
            category: 'ウェブアプリ',
            title: 'Slack App開発ガイド',
            eventName: '技術書典6',
            publishedAt: new Date(),
            imagePath: '/images/circle_item.png',
            path: '/hoge'
        },
        {
            category: 'ウェブアプリ',
            title: 'Slack App開発ガイド',
            eventName: '技術書典6',
            publishedAt: new Date(),
            imagePath: '/images/circle_item.png',
            path: '/hoge'
        },
        {
            category: 'ウェブアプリ',
            title: 'Slack App開発ガイド',
            eventName: '技術書典6',
            publishedAt: new Date(),
            imagePath: '/images/circle_item.png',
            path: '/hoge'
        },
        {
            category: 'ウェブアプリ',
            title: 'Slack App開発ガイド',
            eventName: '技術書典6',
            publishedAt: new Date(),
            imagePath: '/images/circle_item.png',
            path: '/hoge'
        },
        {
            category: 'ウェブアプリ',
            title: 'Slack App開発ガイド',
            eventName: '技術書典6',
            publishedAt: new Date(),
            imagePath: '/images/circle_item.png',
            path: '/hoge'
        }
    ]
    return <main className={styles.mainContainer}>
        <div className={styles.circleContent}>
            <div>
                {circleDesciption}
            </div>
            <h2 className={styles.itemHeader}>頒布物</h2>
            <div className={styles.itemContainer}>
                <ul className={styles.itemList}>
                    {items.map(item => <li className={styles.item}><Item {...item}/></li>)}
                </ul>
            </div>
        </div>
        <div className={styles.circleSide}>

      </div>

    </main>
}

const CirclesShow: NextPage = () => {
    // const router = useRouter()
    // const { id } = router.query
    const circleDesciption = "親方Projectでは、エンジニアの困ったを解決する合同誌を作ってます。見積り何もわからん、を集めた「ワンストップ見積もり」、勉強会は楽しいぞ！を集めたワンストップ勉強会をはじめとして、エンジニアの困ったを解決すべく活動中です。執筆者15名(平均)の知見をあなたにワンストップでお届けます。また、執筆者は絶賛募集中。1ページからでも寄稿OKです。あなたの知見を、今、この本に！書いてみたいと思ったときが書くときです。"
    return <>
    <Header />
        <Main circleDesciption={circleDesciption} />
    </>
}

export default CirclesShow


