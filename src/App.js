import './App.css';
import { Container } from 'react-bootstrap';
import PayrollApp from './payroll-app-components/EmployeeAction';

function App() {
  return (
    <div className="App">
      <Container>
        <PayrollApp />
      </Container>
    </div>
  );
}

export default App;
