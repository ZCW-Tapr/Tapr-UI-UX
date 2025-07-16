import './WizardStepper.css';

const WizardStepper = ({ currentStep }) => {
  const steps = ['Authentication', 'Device Setup', 'Gesture Preferences', 'Confirmation'];

  return (
    <div className="wizard-stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default WizardStepper;

//import WizardStepper from '../components/WizardStepper';
//<WizardStepper currentStep={2} />