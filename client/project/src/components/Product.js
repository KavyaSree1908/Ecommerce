import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from 'styled-components';
const Container=styled.div`
    flex:1;
    margin:5px;
    height:20px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;`;
 const Circle=styled.div`
  width:300px;
  height:300px;
  border-radius:90%;
  background-color:white;
  position:absolute`;
 const Image= styled.img`
 height:75%;
 z-index:2;
 `;
 const Info=styled.div`
 width:100%;
 height:100%;
 position:absolute;
 top:0;
 left:0;
 background-color:rgb(0,0,0,0.2);
 z-index:3;
 display:flex;
 align-items:center;
 justify-content:center;
 `;
 
 const Icon=styled.div`
 width:40px
 height:40px;
 border-radius:50%;
 background-color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 margin:5px;
 transition:all 0.5s ease;
  &:hover{
    background-color:#e9f5f5;
    transfer:scale(1.1);
  }`;
 const Product=({item})=>{
    return(
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                  <ShoppingCartOutlinedIcon/>
                </Icon>
                <Icon>
                <SearchOutlinedIcon/>  
                </Icon>
                <Icon>
                <FavoriteBorderOutlinedIcon/>
                </Icon>
            </Info>
        </Container>
    )
 }
export default Product;