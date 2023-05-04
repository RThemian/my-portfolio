import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProjectCard from '@/components/ProjectCard'
import projectData from '@/public/project-data.json'

const inter = Inter({ subsets: ['latin'] })

console.log(projectData)

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Tomas Paul's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} ${styles.homeMain}`}>
        <section className={styles.pageSection}>
        <p>Hi, I'm Tomas Paul. I'm a full stack web developer.
          I'm currently working on a project called Commerce. It's a full stack e-commerce site built with Django Python and HTML.
          I'm also working on a project called The Shoppies. It's a full stack movie nomination site built with React and Next.js.
        </p>
        </section>
        <section className={styles.pageSection}>
          <h2>Skills</h2>
        </section>
        <section className={styles.pageSection}>
          <h2>Projects</h2>
          <div className={styles.projectsWrapper}>

          
            {
            projectData.map((project, index) => {
              return <ProjectCard key={index} title={project.title} src={project.src} />
            })
            }
          </div>
        </section>
        <section className={styles.pageSection}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}
