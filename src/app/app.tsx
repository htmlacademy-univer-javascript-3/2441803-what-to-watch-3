import WelcomeScreen from '../pages/welcome-screen/welcome-screen.tsx';

type AppScreenProps = {
  name: string;
  year: string;
  genre: string;
}

function App(props: AppScreenProps) {
  return (
    <WelcomeScreen name={props.name} genre={props.genre} year={props.year}/>
  );
}

export default App;
