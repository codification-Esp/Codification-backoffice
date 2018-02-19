/* tslint:disable */

declare var Object: any;
export interface CritereInterface {
  "nomcritere": string;
  "valeur": string;
  "id"?: any;
}

export class Critere implements CritereInterface {
  "nomcritere": string;
  "valeur": string;
  "id": any;
  constructor(data?: CritereInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Critere`.
   */
  public static getModelName() {
    return "Critere";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Critere for dynamic purposes.
  **/
  public static factory(data: CritereInterface): Critere{
    return new Critere(data);
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
      name: 'Critere',
      plural: 'Criteres',
      path: 'Criteres',
      idName: 'id',
      properties: {
        "nomcritere": {
          name: 'nomcritere',
          type: 'string'
        },
        "valeur": {
          name: 'valeur',
          type: 'string'
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
