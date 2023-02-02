import styled from 'styled-components';
import Search from '@mui/icons-material/Search';

const Container=styled.div`
    height:40px;
    background-color:grey;
    color:pink;
    display:flex;
    align-items:center;
    
    font-size:25px;
    font-weight:500;`
const MenuItem=styled.div`
    font-size:19px;
    font-weight:bold;
    cursor:pointer;
    margin-left:54px;
    aign-items:center;`
const SearchContainer=styled.div`
    border:1px solid black;
    display:flex;
    align-items:center;
    align-text:right;
    margin-left:30px;
    padding:3px;`
const Input = styled.input`
    border: none;
    margin-left:10px;
    height:15px;
    
   `
const Announcement = () => {
  return (
    <Container>
        <MenuItem>Top Deals</MenuItem>
        <MenuItem>Customer Service</MenuItem>
        <MenuItem>Registry</MenuItem>
        <MenuItem>Sell</MenuItem>
        <SearchContainer>
             <Input placeholder="Search"/>
             <Search style={{color:"black",fontsize:45}}/>
           </SearchContainer>

    </Container>
  )
}

export default Announcement