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
                <img className={styles.image} src={imagePath} />
                <div className={styles.category}>{category}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.eventName}>{published}</div>
            </a>
        </Link>
    </div>
}
