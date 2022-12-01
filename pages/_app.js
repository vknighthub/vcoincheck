import { useRouter } from 'next/router';
import { useState } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { appWithTranslation } from 'next-i18next'
import '../styles/chart.css';
import '../styles/css/style.css';
import '../styles/globals.css';
import '../styles/index.css';

import Nav from './layouts/nav';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';



export async function getStaticProps() {
  const queryClient = new QueryClient()

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  let path = pid.split('/')
  path = path[path.length - 1]
  let pagePath = path.split('-').includes('page')
  const [activeEvent, setActiveEvent] = useState(!path)

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: { queries: { staleTime: 60000 } },
  }))


  return (
    <>
      <SimpleReactLightbox>
        <QueryClientProvider client={queryClient} >
          <Hydrate state={pageProps.dehydratedState}>
            <div
              id={`${!pagePath ? 'main-wrapper' : ''}`}
              className={`${!pagePath ? 'show' : 'mh100vh'}`}
            >

              {!pagePath && (
                <Nav />
              )}
              <div className={` ${!path && activeEvent ? 'rightside-event' : ''} ${!pagePath ? 'content-body' : ''}`} >
                <div className={`${!pagePath ? 'container-fluid' : ''}`} >
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </Hydrate>
        </QueryClientProvider>
      </SimpleReactLightbox>
    </>
  )
}

export default appWithTranslation(MyApp)
