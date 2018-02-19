/* tslint:disable */

declare var Object: any;
export interface PeriodeCodificationInterface {
  "datedebut": Date;
  "datefin": Date;
  "id"?: any;
}

export class PeriodeCodification implements PeriodeCodificationInterface {
  "datedebut": Date;
  "datefin": Date;
  "id": any;
  constructor(data?: PeriodeCodificationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PeriodeCodification`.
   */
  public static getModelName() {
    return "PeriodeCodification";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PeriodeCodification for dynamic purposes.
  **/
  public static factory(data: PeriodeCodificationInterface): PeriodeCodification{
    return new PeriodeCodification(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'PeriodeCodification',
      plural: 'PeriodeCodifications',
      path: 'PeriodeCodifications',
      idName: 'id',
      properties: {
        "datedebut": {
          name: 'datedebut',
          type: 'Date'
        },
        "datefin": {
          name: 'datefin',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
