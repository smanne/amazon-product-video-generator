import { registerRoot } from 'remotion';
import { RemotionRoot } from './RemotionRoot';
import config2 from './config/videoConfig2.json';
import config3 from './config/videoConfig3.json';
import config4 from './config/videoConfig4.json';
import config5 from './config/videoConfig5.json';

type ConfigKey = '2' | '3' | '4' | '5';

const configs: Record<ConfigKey, typeof config3> = {
  '2': config2,
  '3': config3,
  '4': config4,
  '5': config5,
};

interface RootProps {
  configNumber?: string;
}

const Root: React.FC<RootProps> = ({ configNumber }) => {
  console.log('Received configNumber:', configNumber);
  
  const configKey = (configNumber || '4') as ConfigKey;
  const config = configs[configKey] || config3;
  console.log('Selected Config Title:', config.titleSlide.title);
  
  return <RemotionRoot config={config} />;
}

registerRoot(Root);