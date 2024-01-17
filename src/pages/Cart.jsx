import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"

const Container = styled.div`

`
const Wrapper = styled.div`

`
const Title = styled.h1`

`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart