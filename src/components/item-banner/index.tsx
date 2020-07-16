import styles from './index.module.css'

type Props = {
    text: string
    startAt: string
    endAt: string
}

export const ItemBanner: React.FC<Props> = ({ text, startAt, endAt }) => {
    return <div>
        <div>{startAt} - {endAt}</div>
        <div>{text}</div>
    </div>
} 