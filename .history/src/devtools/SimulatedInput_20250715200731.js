import { useEffect } from 'react';
import { useZone } from '../context/ZoneContext';
import { routeTouch } from '../utils/TouchRouter';

export default function SimulatedInput() {
  const { zones } = useZone();
  const [matchedActions, setMatchedActions] = useState([]);

    useEffect(() => {
      const gesture = { fingers: 2, motion: 'tap' };
      const result = routeTouch(zones, gesture.fingers, gesture.motion);
      setMatchedActions(result);
      <GestureFeedback matchedActions={matchedActions} />
      console.log('Result of simulated gesture:', result);
    }, []);

  return null;
}