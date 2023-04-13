import { OpenAPIV3 } from 'openapi-types';
import swaggerSpec1_8 from "../specs/1.8.0-swagger.json";
import swaggerSpec1_9 from '../specs/1.9.0-swagger.json';
import swaggerSpec1_10 from '../specs/1.10.0-swagger.json';
import swaggerSpec2_0 from '../specs/2.0.0-swagger.json';
import swaggerSpec2_1 from '../specs/2.1.0-swagger.json';
import swaggerSpec2_2 from '../specs/2.2.0-swagger.json';
import swaggerSpec2_3 from '../specs/2.3.0-swagger.json';
import swaggerSpec2_4 from '../specs/2.4.0-swagger.json';
import swaggerSpec2_5 from '../specs/2.5.0-swagger.json';
import swaggerSpec2_6 from '../specs/2.6.0-swagger.json';
import swaggerSpec2_7 from '../specs/2.7.0-swagger.json';

export const specMap = {
  '1.8.0': swaggerSpec1_8,
  '1.9.0': swaggerSpec1_9,
  '1.10.0': swaggerSpec1_10,
  '2.0.0': swaggerSpec2_0,
  '2.1.0': swaggerSpec2_1,
  '2.2.0': swaggerSpec2_2,
  '2.3.0': swaggerSpec2_3,
  '2.4.0': swaggerSpec2_4,
  '2.5.0': swaggerSpec2_5,
  '2.6.0': swaggerSpec2_6,
  '2.7.0': swaggerSpec2_7,
}

export enum SupportLanguage {
  zh = "zh",
  en = "en",
}

export type ISpec = OpenAPIV3.Document

