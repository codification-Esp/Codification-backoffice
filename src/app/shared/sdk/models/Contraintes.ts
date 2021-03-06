/* tslint:disable */

declare var Object: any;
export interface ContraintesInterface {
  "attribut": string;
  "valeur": string;
  "comparaison": string;
  "id"?: any;
  "batimentId"?: any;
  "etageId"?: any;
}

export class Contraintes implements ContraintesInterface {
  "attribut": string;
  "valeur": string;
  "comparaison": string;
  "id": any;
  "batimentId": any;
  "etageId": any;
  constructor(data?: ContraintesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contraintes`.
   */
  public static getModelName() {
    return "Contraintes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contraintes for dynamic purposes.
  **/
  public static factory(data: ContraintesInterface): Contraintes{
    return new Contraintes(data);
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
      name: 'Contraintes',
      plural: 'Contraintes',
      path: 'Contraintes',
      idName: 'id',
      properties: {
        "attribut": {
          name: 'attribut',
          type: 'string'
        },
        "valeur": {
          name: 'valeur',
          type: 'string'
        },
        "comparaison": {
          name: 'comparaison',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "batimentId": {
          name: 'batimentId',
          type: 'any'
        },
        "etageId": {
          name: 'etageId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
