import styles from './page.module.css'

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-6">
        <div className="col-start-2 row-start-2 flex flex-col justify-center items-center">
            <p className="text-2xl pb-3">Hi, I'm Tim. 👋</p>
            <p>I'm a Software Engineer who loves to build things.</p>
        </div>
    </div>
  )
}
