import yaml from 'js-yaml';
import touchMappingRaw from '../../docs/touch-mapping-schema.yaml';
import zoneSeed from '../../docs/touch-mapping-schema.json';

export function parseTouchMapping() {
  return zoneSeed; // returns full zones object for useState
}

export function parseTouchMapping() {
  return yaml.load(touchMappingRaw);
}