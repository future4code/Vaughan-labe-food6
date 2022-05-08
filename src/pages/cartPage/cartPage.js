
import React, { useContext, useEffect } from "react";
import { Footer } from "../../components/Footer";
import { GlobalStateContext } from "../../global/globalStateContext";
import { ContainerLogo, Home } from "../HomePage/styled";
import { Finaliza, Card, Container, ContainerInfo, ContainerQuantidade, Description, Finalizar, Header, HeaderCard, Info, Itens, Name, P, Price, Produto, ProdutoIMG, P2, ContainerLogo2 } from "./styled";
import { TransitionsModal } from '../../components/modal'
import { Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import  logo  from '../../assets/logo-future-eats-invert.png'
import Cart from '../../assets/shopping-cart.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
};

export const CartPage = () => {

    const { cart, setCart } = useContext(GlobalStateContext)
    const [open, setOpen] = React.useState(false);


    // const new1 = lista.filter(x=> x !== cart[i])
    //                 setCart(new1)

    const remove = (product) => {

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id) {
                const lista = [...cart]
                const new1 = lista.filter((x)=> x.id !== cart[i].id)
                setCart(new1)
                setOpen(true)
            }
        }
    }



    const cardsProducts = cart.map((product) => {
        return <Card key={product.id}>
            <HeaderCard>
                <Produto>
                    <ProdutoIMG src={product.photoUrl}></ProdutoIMG>
                    <ContainerInfo>
                        <Name>{product.name}</Name>
                        <Description>{product.description}</Description>
                        <Price> R$: {product.price} reais </Price>
                    </ContainerInfo>
                </Produto>
                <Info>
                    <ContainerQuantidade> Quantidade: {product.quantidade}</ContainerQuantidade>
                    <TransitionsModal
                        topButton={"Remover"}
                        textoModal={"Deseja remover os itens ?"}
                        botao={
                            <Button onClick={() => remove(product)} variant="contained" sx={{
                                width: 100,
                                color: 'primary.contrastText',
                            }}>Remover</Button>}
                    ></TransitionsModal>
                </Info>
            </HeaderCard>
        </Card>
    })


    return (

        <Home>
            <ContainerLogo><P src={logo} alt='Rappi4' /></ContainerLogo>
            <hr></hr>
            <Header>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={() => setOpen(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open} >
                        <Box sx={style} flexDirection='column' justifyContent='center' display='flex' alignItems='center'>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Produto apagado com sucesso !!
                            </Typography>
                            <Typography flexDirection='column' justifyContent='center' display='flex' alignItems='center' id="transition-modal-description" sx={{ mt: 2 }}>
                                <Button variant="contained" onClick={() => setOpen(false)} >Fechar</Button>
                            </Typography>
                        </Box>
                    </Fade>
                </Modal> 
                <Container>
                    Carrinho {cart.length === 0  ? 'vazio' : '' }
                </Container>
                <Itens>
                    {cardsProducts}
                </Itens>
            </Header>
            {cart.length == 0 ? <ContainerLogo2><P2 src={Cart} alt='Rappi4' /></ContainerLogo2> : <Button variant="contained" onClick={() => alert('Pedido agendado!')} sx={Finaliza} >Finalizar Compra</Button>}
            <Footer tela={1} />
        </Home>

    )
}