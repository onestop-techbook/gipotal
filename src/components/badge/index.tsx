import styles from './index.module.css'

type Props = {
value : string | number
}

export const Badge : React.FC<Props> = ({value}) => {
return <span className={styles.badge}>{value}</span>
}