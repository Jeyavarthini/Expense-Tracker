
import styled from "styled-components";
import bg from './img/bg.png'


function App() {
  return (
    <AppStyled bg={bg} className="App">

    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
`;

export default App;



// import styled from "styled-components";
// import bg from './img/bg.png';

// function App() {
//   return (
//     // <AppStyled bg={bg} className="App">
//     //   {/* Your app content */}
//     // </AppStyled>
//     <div className="App">
//       <div style={{
//          backgroundImage:`url(${bg})`,
//          backgroundSize: cover
//       }}></div>
//     </div>
//   );
// }

// // const AppStyled = styled.div`
// //   height: 100vh;
// //   backgroundImage: url(${props => props.bg});
// //   background-size: cover; /* Adjust this as needed */
// // `;


