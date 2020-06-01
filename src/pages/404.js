import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <main>
        <div className="container text--center">
          <h1>Not Found</h1>
          <iframe
            title="four oh four"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          />
        </div>
      </main>
    </Layout>
  )
}

export default NotFoundPage
