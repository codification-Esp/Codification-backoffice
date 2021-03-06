/* tslint:disable */
import {
  Etudiant,
  Reservation
} from '../index';

declare var Object: any;
export interface AccountInterface {
  "realm"?: string;
  "username"?: string;
  "challenges"?: any;
  "email": string;
  "emailVerified"?: boolean;
  "status"?: string;
  "created"?: Date;
  "lastUpdated"?: Date;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  etudiants?: Etudiant;
  reservation?: Reservation;
}

export class Account implements AccountInterface {
  "realm": string;
  "username": string;
  "challenges": any;
  "email": string;
  "emailVerified": boolean;
  "status": string;
  "created": Date;
  "lastUpdated": Date;
  "id": any;
  "password": string;
  accessTokens: any[];
  etudiants: Etudiant;
  reservation: Reservation;
  constructor(data?: AccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Account`.
   */
  public static getModelName() {
    return "Account";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
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
      name: 'Account',
      plural: 'Accounts',
      path: 'Accounts',
      idName: 'id',
      properties: {
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "credentials": {
          name: 'credentials',
          type: 'any'
        },
        "challenges": {
          name: 'challenges',
          type: 'any'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "lastUpdated": {
          name: 'lastUpdated',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        etudiants: {
          name: 'etudiants',
          type: 'Etudiant',
          model: 'Etudiant',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'accountId'
        },
        reservation: {
          name: 'reservation',
          type: 'Reservation',
          model: 'Reservation',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'accountId'
        },
      }
    }
  }
}
