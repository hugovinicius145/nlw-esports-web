
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <>
      <Button title="button 1" />
      <Button title="button 2" />
      <Button title="button 3" />
    </>
  );
}

export default App
