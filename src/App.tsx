import { useState } from 'react';
import './App.scss';


function App() {
  const [data, setData] = useState();  // data was originally set to null in previous lab
  const [requestParameters, setRequestParameters] = useState({});

  const callApi = (stuffUserPutInForm: string) => {
    setRequestParameters(stuffUserPutInForm)
  };

  const payload = {
    //mock output
    count: 2,
    results: [
      { name: 'fake thing 1', url: 'http://fakethings.com/1' },
      { name: 'fake thing 2', url: 'http://fakethings.com/2' }
    ],
  };

  // //https://stackoverflow.com/questions/30765163/pretty-printing-json-with-react
  // const PrettyPrintJson = ({ payload}) => (<div><pre>{JSON.stringify(payload, null, 2)}</pre></div>);
  

  setData({ payload }); 

  setRequestParameters({ requestParameters });


  return (
    <>
      <header className="HeaderAndMainstyling">
        <h1>This is the name of my app</h1>
      </header>

      <main className="HeaderAndMainstyling">
        Some stuff will go in here eventually
      </main>
    </>
  );

}

export default App;
