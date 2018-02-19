/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface EchangeInterface {
  "id"?: any;
  "echageur_id"?: any;
  account?: Account;
}

export class Echange implements EchangeInterface {
  "id": any;
  "echageur_id": any;
  account: Account;
  constructor(data?: EchangeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Echange`.
   */
  public static getModelName() {
    return "Echange";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Echange for dynamic purposes.
  **/
  public static factory(data: EchangeInterface): Echange{
    return new Echange(data);
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
      name: 'Echange',
      plural: 'Echanges',
      path: 'Echanges',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "echageur_id": {
          name: 'echageur_id',
          type: 'any'
        },
      },
      relations: {
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'echageur_id',
          keyTo: 'id'
        },
      }
    }
  }
}
