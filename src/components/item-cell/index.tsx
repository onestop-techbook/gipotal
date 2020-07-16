import Link from 'next/link'
import styles from './index.module.css'

export type ItemProps = {
    category: string
    imagePath: string
    title: string
    eventName?: string 
    publishedAt: Date
    path: string
}

export const Item: React.FC<ItemProps> = ({category, imagePath, title, eventName,　publishedAt, path}) => {
    const date = publishedAt.toLocaleDateString().replace(/\//g,'.')
    const published = eventName ? `${eventName} (${date})` : date
    return <div>
        <Link href={path}>
            <a>
                <div className={styles.cover}>
                    <img className={styles.coverImage} src={imagePath} />
                </div>
                <div className={styles.category}>{category}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.eventName}>{published}</div>
            </a>
        </Link>
    </div>
}
