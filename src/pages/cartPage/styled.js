import styled from "styled-components"

export const P = styled.img`

`
export const P2 = styled.img`

width: 10vw;
`

export const ContainerLogo = styled.div`
display:flex;
justify-content: center;  
`
export const ContainerLogo2 = styled.div`
display:flex;
justify-content: center;  
height: 80vh;
align-items: center;
`


export const Home = styled.header`

`

// CARD PRODUTO ===================

export const Card = styled.div`
   justify-content: center;
    display: flex;
    align-items: center;
`
export const HeaderCard = styled.div`
border: solid 1px #b8b8b8;
width: 80%;
height: 150px;
display:flex;
margin: 1vw;
justify-content: space-between;
align-items: flex-end;
`

export const Produto = styled.div`
  width: 90%;
  height: 150px;
  display:flex;
  align-items: center;
`

export const ProdutoIMG = styled.img`
  object-fit: cover; 
  width: 50%;
  height: 100%;  
`
export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1vh;
`
export const Name = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--dark-peach);
  color: #e86e5a;
`

export const Description = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
`
export const Price = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
`
export const ContainerQuantidade = styled.div`

  justify-content: center;
  display: flex;
  align-items: center;
  height: 20%;
  width: 100%;
  padding: 0 10%;
  justify-content: flex-end;
  margin: 1vh;
  font-size: 10px;

`
export const Info = styled.div`

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  justify-content: space-between;
  align-items: flex-end;
`

//=======================================

export const Header = styled.header`

`

export const Container = styled.div`

  display:flex;
  justify-content: center;

`

export const Itens = styled.div`
  margin: 10px;
`

// ===================== FINALIZAR COMPRA 

export const Finalizar = styled.div`
 display: flex;
 background-color: #ff7043;
 justify-content: center;
  position: fixed;
  border: 1px black solid;
  border-top:1px solid grey ;
    width: 100%;
     height: 100px;
    text-align: center;
    align-items: center;
   justify-items: center;
  bottom: 70px;
`

export const Finaliza = {
  display: 'flex',
  backgrounColor: '#ff7043',
  justifyContent: 'center',
   position: 'fixed',
   border: '1px black solid',
   borderTop:'1px solid grey',
     width: '30%',
      height: '80px',
     textAlign: 'center',
     alignItems: 'center',
    justifyItems: 'center',
   bottom: '70px',
   borderRadius: ' 0 30px 0 0 ',
   boxShadow: '10px 5px 20px grey',
    border: '0'
}
