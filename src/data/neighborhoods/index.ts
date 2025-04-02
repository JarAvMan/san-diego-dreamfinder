
import { Neighborhood } from './types';
import { coastalNeighborhoods } from './coastal';
import { centralNeighborhoods } from './central';
import { northNeighborhoods } from './north';
import { eastNeighborhoods } from './east';
import { southNeighborhoods } from './south';

// Combine all neighborhoods
export const sandiegoNeighborhoods: Neighborhood[] = [
  ...coastalNeighborhoods,
  ...centralNeighborhoods,
  ...northNeighborhoods,
  ...eastNeighborhoods,
  ...southNeighborhoods
];

// Export region collections for direct access
export {
  coastalNeighborhoods,
  centralNeighborhoods,
  northNeighborhoods,
  eastNeighborhoods,
  southNeighborhoods
};

// Export types
export * from './types';
