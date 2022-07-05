import SimpleLayout from '../component/layouts/sample'
import Head from "next/head";

export default function Home(initialData) {
  return (
    <SimpleLayout>
        <Head>
            <title>Khata Management</title>
        </Head>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Subscribe to Deepak khadka</h1>
          <p className="lead text-muted">
            Learn and Share
          </p>
        </div>
      </section>

      <div className="row">
        <h1>Hey People</h1>
        <p>
          For understanding of this project, see: 
        </p>
      </div>
    </SimpleLayout>
  )
}