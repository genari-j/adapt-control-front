// import StudentsSys from '~/main/assets/images/favicon.png'

import { Container } from "./styles"

export const Logo = () => {
  return (
    <Container>
      {/* <img src={StudentsSys} alt="Students Sys" /> */}
      <div>
        <span>Students</span>
        <span>Sys</span>
      </div>
    </Container>
  )
}