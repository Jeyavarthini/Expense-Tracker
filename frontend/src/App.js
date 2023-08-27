import { styled } from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";


function App() {
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Orb/>
      </MainLayout>
    </AppStyled>
  );
}
      const AppStyled = styled.div`
      height: 100vh;
      background-image: url(${bg})`;


export default App;


