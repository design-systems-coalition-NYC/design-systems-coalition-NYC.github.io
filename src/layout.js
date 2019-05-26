/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from './components/Container'
import Header from './pages/header.mdx'
import Footer from './pages/footer.mdx'

export default props =>
  <div>
    <Header />
    <Container
      css={{
        py: 4,
      }}>
      {props.children}
    </Container>
    <Footer />
  </div>
