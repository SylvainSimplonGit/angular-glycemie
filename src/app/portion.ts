import { Aliment } from './aliment';

export interface Portion {
  aliment: Aliment;
  propCarbs: number;
  chargeGlyc: number;
}
