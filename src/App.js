import Footer from './component/Footer';
import Middle from './component/Middle';
import Middle2 from './component/Middle2';
import Header from './component/Header';
import './App.css';


function App() {

 
  return (
   
    <div>
      <Header />
      <Middle />
      <Middle2 />
      <Footer />
      
    </div>
  );
}

export default App;










 // const [count,setCount]=useState(0)
  // const addCount=()=>{
  //   setCount(count+1)
  // }
  // const subCount=()=>{
  //   setCount(count-1)
  // }
  // const obj={
  //   tity:'2nd',
  //   count:count,
  //   just:'heyy'
  // }
  // const objy={
  //   tit:'3nd',
  //   count:count,
  //   just:'keyy'
  // }





 // <div>
    //   <button onClick={addCount}>add</button>  
    //   <button onClick={subCount}>sub</button>
    //  {/* <h1>hello world:{count}</h1> */}
    //   <Counter title='1st' just="fuck" count={count}/>
    //   <Counter {...obj}{...objy} just="diff"/>
      
    // </div>