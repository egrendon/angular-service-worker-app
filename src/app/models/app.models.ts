// List of models used by the application

import { ModelStateEnum } from '../enums/model.enum';

export abstract class Model {
  public static modelName: string;
  public static modelPlural: string;

  public static lookupField: string;
  public state: ModelStateEnum;
}


export class BaseModel {
  public static lookupField = 'id';
  public state: ModelStateEnum;
}


