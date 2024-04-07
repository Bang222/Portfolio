import './App.css';

import Navbar from "./components/template/navbar/Navbar";
import Home from "./components/template/home/Home";
import About from "./components/template/about/About";
import LineComponent from "./components/molecules/Line/LineComponent";
import Project from "./components/template/project/Project";
import Contact from "./components/template/contact/Contact";

function App() {
    let findSecondNumbe: number[] = [1,2,4,5,2,5,6,2,2,1,412,354,345,234,6456,23,41,534,5,1,98,3,6,2]
    let  arrayConditioned:number[] = [];
    let conditionArray = findSecondNumbe.filter((acc) => {
        if(!arrayConditioned.includes(acc)) {
            arrayConditioned.push(acc)
            return true
        }
        return false
    })
    let sortArray = arrayConditioned.sort((acc,cur) => cur - acc);
    console.log(arrayConditioned[1])

    return (
      <div className={`lg:bg-gray-700 bg-gray-300" `}>
         <Navbar/>
          <div className={"container lg:max-w-[1000px] lg:bg-gray-300 mx-auto px-8 md:px-10"}>
              <div id={'home'}>bang</div>
              <Home/>
              <LineComponent/>
              <About/>
              <LineComponent/>
              <Project/>
              <LineComponent/>
              <Contact/>
          </div>
      </div>
  );
}

export default App;
