import styled from 'styled-components';

const ListItem = styled.li`
  color: #000;

  &:hover {
    color: #ff0000;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  background-color: aquamarine;
`

function Header() {
  return(
    <List>
      <ListItem>inicio</ListItem>
      <ListItem>sobre</ListItem>
      <ListItem>galeria</ListItem>
    </List>
  );
}

export default Header;