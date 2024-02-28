import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello'

function App() {
  const helloData =[
    { name: 'Ariya', message: 'Hi'},
    { name: 'Pooh', message: "wassup"}
  ];

  return (
    <div className='App'>
      <Counter />
      {helloData.map((data, index) => (
        <Hello key ={index} name={data.name} message={data.message} />
      ))}

      <Contact email="s640602162137@email.kmutnb.ac.th" phone="0983659354" />
    </div>
  );
}

export default App
