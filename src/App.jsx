import List from './List.jsx'

function App() {

  const fruits = [{id:"1",name:"apple",calories: 95},
                  {id:2,name:"orange",calories: 45},
                  {id:3,name:"banana",calories:56},
                  {id:4,name:"coconut",calories:44},
                  {id:5,name:"pineapple",calories:34}];

  const vegetables = 
                  [{id:6,name:"potatoes",calories: 110},
                  {id:7,name:"celery",calories: 145},
                  {id:8,name:"carrots",calories:456},
                  {id:9,name:"corn",calories:44},
                  {id:10,name:"broccoli",calories:64}];

    return(
      // <>
      //   {fruits.length >0 ? <List items={fruits} category="fruits"/> : null}
      //   {vegetables.length >0 ? <List items={vegetables} category="vegetables"/>:null}
      <>
      {fruits.length >0 && <List items={fruits} category="fruits"/>}
      {vegetables.length >0 && <List items={vegetables} category="vegetables"/>}
      </>
    );
}

export default App
