import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetupFlowScreen from './pages/SetupFlowScreen';
import PreviousStepScreen from './pages/PreviousStepScreen';
import NextStepScreen from './pages/NextStepScreen';
import SimulatedInput from './devtools/SimulatedInput';
import OnboardingWizard from './screens/OnboardingWizard';
import ZoneDashboard from './screens/ZoneDashboard'; // double-check this import

function App() {
  const [isOnboarded, setIsOnboarded] = useState(false);

  return (
    <>
      {process.env.NODE_ENV === 'development' && <SimulatedInput />}
      {isOnboarded ? (
        <ZoneDashboard />
      ) : (
        <OnboardingWizard onComplete={() => setIsOnboarded(true)} />
      )}

      <Router>
        <Routes>
          <Route path="/" element={<SetupFlowScreen />} />
          <Route path="/previous-step" element={<PreviousStepScreen />} />
          <Route path="/next-step" element={<NextStepScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;