import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetupFlowScreen from './pages/SetupFlowScreen';
import PreviousStepScreen from './pages/PreviousStepScreen';
import NextStepScreen from './pages/NextStepScreen';
import SimulatedInput from './devtools/SimulatedInput';
import OnboardingWizard from './screens/OnboardingWizard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SetupFlowScreen />} />
        <Route path="/previous-step" element={<PreviousStepScreen />} />
        <Route path="/next-step" element={<NextStepScreen />} />
      </Routes>
    </Router>
  );
}

{process.env.NODE_ENV === 'development' && <SimulatedInput />}
export default App;
const [isOnboarded, setIsOnboarded] = useState(false);

return isOnboarded ? (
  <ZoneDashboard />
) : (
  <OnboardingWizard onComplete={() => setIsOnboarded(true)} />
);