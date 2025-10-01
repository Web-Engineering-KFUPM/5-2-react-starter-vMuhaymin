import './App.css'
import MyComponent from './components/StudentCard'
import MyComponentProps from './components/StudentCardProps'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {<MyComponent />}
          {<MyComponentProps name="Abdulmuhaymin" ID="202275600" Department="ICS"></MyComponentProps>}
        </div>
      </main>
    </div>
  )
}

export default App
