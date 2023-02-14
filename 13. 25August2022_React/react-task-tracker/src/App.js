import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
function App(){
  return(
    <div className='container'>
      <Header title={'Task Tracker'}/>
    </div>
  );
}
export default App;
// import Header from './component/registration';
// import Login from './component/Login';
// import Welcome from './component/welcome';
// function App(){
//   return(
//     <div className='container'>
//       <Welcome display = "welcome user"></Welcome>
//       <Header Name = "Ria" Age  = "19" Address = "Chandigarh" Username = "riavv" Password = "vv"/>
//       <Login username = "riavv" password = "vv" />
      
//     </div>
//   );
// }


// import Header from './component/header';
// function App(){
//   return(
//     <div className='container'>
//     <Header title={12}/>
//     </div>
//   );
// }

// // const name = "Anshika";
// // const x = false;

// function App() {
//   return(
//     <div className="container">
//       <h1>{name}</h1>
//       <h2>{55+61}</h2>
//       <h2>{x ? "Yes" : "No"}</h2>
//     </div>
//  );
// }


