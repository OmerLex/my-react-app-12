import logo from './logo.svg';
import './App.css';
import img from './images/person1.jpg';
import Title from './components/Title';
import MenuItems from './components/MenuItems';

// function Title(){
//   return (
//     <h1>My First Component</h1>
//   )
// }

// const Title = () => <h1>My First Component</h1>;

function App() {
  const name = "John";
  const lastName = "Doe";
  const x = true;
  //const imageUrl = 'https://picsum.photos/seed/picsum/400/400'; 
  
  return (
    <div className="App">
        <MenuItems />
        <Title />
        <h1>Hello React</h1>
        <h2>Hello {name} {lastName}</h2>
        <h2>{x ? 'Yes' : 'No' }</h2>
        <img src={img} alt="" />
        {/* <img src={imageUrl} alt="" /> */}


    </div>
   
    
    
  );
}

export default App;
