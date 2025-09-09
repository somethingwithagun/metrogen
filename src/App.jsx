import { useState } from 'react'
import Branch from './Branch.jsx'
import getRandom from './utility.js'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [result, setResult] = useState(null)
  const [autozav, setAutozav] = useState([
                {name:'Каменная Горка', selected:true},
                {name:'Кунцаўшчына', selected:true},
                {name:'Спартыўная', selected:true},
                {name:'Пушкінская', selected:true},
                {name:'Маладзёжная',selected:true},
                {name:'Фрунзенская', selected:true},
                {name:'Няміга', selected:true},
                {name:'Купалаўская', selected:true},
                {name:'Першамайская', selected:true},
                {name:'Пралетарская', selected:true},
                {name:'Трактарны завод ', selected:true},
                {name:'Партызанская', selected:true},
                {name:'Магілёўская', selected:true}]);
                
  const [zelenal, setZelenal] = useState([
                {name:'Юбілейная плошча', selected:true},
                {name:'Плошча Францішка Багушэвіча', selected:true},
                {name:'Вакзальная', selected:true},
                {name:'Кавальская Слабада', selected:true},
                {name:'Аэрадромная', selected:true},
                {name:'Немаршанскі сад', selected:true},
                {name:'Слуцкі гасцíнец', selected:true}])
                
  const [moscow, setMoscow] = useState([{name:'Уручча', selected:true},
                {name:'Барысаўскі тракт', selected:true},
                {name:'Усход', selected:true},
                {name:'Маскоўская', selected:true},
                {name:'Парк Чалюскінцаў', selected:true},
                {name:'Плошча Якуба Коласа', selected:true},
                {name:'Плошча Перамогі', selected:true},
                {name:'Кастрычніцкая', selected:true},
                {name:'Плошча Леніна', selected:true},
                {name:'Інстытут культуры', selected:true},
                {name:'Грушаўка', selected:true},
                {name:'Міхалова', selected:true},
                {name:'Пятроўшчына', selected:true},
                {name:'Малінаўка', selected:true}])

  const selectedStations = (array) => {
    let newarr = [];
    for(let i = 0; i < array.length; i++) {
      if(array[i].selected) newarr.push(array[i]);
    }
    return newarr;
  }

  const handleGenerate = () => {
    const branchNum = getRandom(1, 3);

    let stations = [];
      
    if(branchNum === 1) {
      stations = selectedStations(moscow);
    }
    if(branchNum === 2) {
      stations = selectedStations(autozav);
    }
    if(branchNum === 3) {
      stations = selectedStations(zelenal);
    }

    const stationNum = getRandom(0, stations.length-1);
    
    setResult(<h1 className='result'>{stations[stationNum].name}</h1>)
  }; 

  const handleAutozavSelected = (index) => {
    const past = autozav.slice();
    past[index].selected = !past[index].selected;

    setAutozav(past);
  };
  
  const handleZelenalSelected = (index) => {
    const past = zelenal.slice();
    past[index].selected = !past[index].selected;

    setZelenal(past);
  };
  
  const handleMoscowSelected = (index) => {
    const past = moscow.slice();
    past[index].selected = !past[index].selected;

    setMoscow(past);
  };

  return (
    <div className='container'>
    <h1>Генератор рандомной станции метро</h1>
    <div className='branches'>
      <Branch stations={autozav} branchName='autozav' setSelected={handleAutozavSelected}/>
      <Branch stations={zelenal} branchName='zelenal' setSelected={handleZelenalSelected}/>
      <Branch stations={moscow} branchName='moscow' setSelected={handleMoscowSelected}/>
    </div>
    <button className="generate" onClick={handleGenerate}>Поехали!</button>
    {result}
    </div>
  )
}

export default App
