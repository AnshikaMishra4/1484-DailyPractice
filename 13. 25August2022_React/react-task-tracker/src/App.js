import logo from './logo.svg';
import './App.css';
import Header from './component/header';
function App(){
  return(
    <div className='container'>
    <Header title={12}/>
    </div>
  );
}

// const name = "Anshika";
// const x = false;

// function App() {
//   return(
//     <div className="container">
//       <h1>{name}</h1>
//       <h2>{55+61}</h2>
//       <h2>{x ? "Yes" : "No"}</h2>
//     </div>
//  );
// }

export default App;
