/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Header from './sections/header.mdx'
import Footer from './sections/footer.mdx'

export default props =>
  <div>
    <Header />
    <Container
      sx={{
        py: 4,
      }}>
      {props.children}
    </Container>
    <Footer />
  </div>
