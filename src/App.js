import FormInput from "./components/FormInput"

function App() {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="User name" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full name" />
        <FormInput placeholder="Sth else" />
      </form>
    </div>
  )
}

export default App
