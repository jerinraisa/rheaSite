import styles from '../styles/Home.module.scss'
import copy from '../copy/content'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h1 className={styles.title}
            dangerouslySetInnerHTML={{
              __html: copy.description.title,
            }}>
          </h1>
          <div className={styles.descriptionText}>
            <p className={styles.descriptionContent}
              dangerouslySetInnerHTML={{
                __html: copy.description.description1,
              }}>
            </p>
            <p className={styles.descriptionContent}
              dangerouslySetInnerHTML={{
                __html: copy.description.description2,
              }}>
            </p>
            </div>
          <a className={styles.nextContent}
            dangerouslySetInnerHTML={{
              __html: copy.nextSection.title,
          }}
          href={copy.nextSection.link}
          target="_blank"
          rel="noopener noreferrer">
        </a>
        </div>
        <div className={styles.animation}>
          <div className={styles.image1}>
            <Image
              src={'/R.svg'}
              layout='fixed'
              width='100'
              height='100'
              />
          </div>
          <div className={styles.image2}>
            <Image
              src={'/H.svg'}
              layout='fixed'
              width='100'
              height='100'
              />
          </div>
          <div className={styles.image3}>
            <Image
              src={'/E.svg'}
              layout='fixed'
              width='100'
              height='100'
              />
          </div>
          <div className={styles.image4}>
            <Image
              src={'/A.svg'}
              layout='fixed'
              width='100'
              height='100'
              />
          </div>
        </div>
      </div>
    </div>
  )
}
