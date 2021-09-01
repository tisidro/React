
import './App.css';

function App() {

  const title = 'This is a dynamic title!'
  const likes = 50;

  return (
    <div className="App">
      <div className="content"></div>
      <h1>{title}</h1>
      <p>Number of likes: {likes}</p>
    </div>
  );
}

export default App;
