'use strict';
import { UTILS } from './utils';

/**
 * List of GET Endpoints available on the Destiny API
 */
let GET = [
        { name: 'Search', url: 'SearchDestinyPlayer/${ membershipType }/${ name }/', required: ['membershipType', 'name'], optional: ['ignorecase'] },
        { name: 'Account', url: '${ membershipType }/Account/${ membershipId }/', required: ['membershipType', 'membershipId'] },
        { name: 'Character', url: '${ membershipType }/Account/${ membershipId }/Character/${ characterId }/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'Activities', url: '${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Activities/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'Inventory', url: '${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Inventory/Summary/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'Progression', url: '${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Progression/', required: ['membershipType', 'membershipId', 'characterId'] },
        { name: 'ItemDetail', url: '${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Inventory/${ itemInstanceId }/', required: ['membershipType', 'membershipId', 'characterId', 'itemInstanceId'], optional: ['definitions'] }
    ].map(UTILS.assignMap({ options: { method: UTILS.METHODS.GET, headers: UTILS.HEADERS } }));

/**
 * List of POST Endpoints available on the Destiny API
 */
let POST = [
        { name: 'Equip', url: 'EquipItem', required: ['characterId', 'itemId', 'membershipType'] },
        { name: 'TransferItem', url: 'TransferItem', required: ['characterId', 'itemId', 'itemReferenceHash', 'membershipType'] }
    ].map(UTILS.assignMap({ options: { method: UTILS.METHODS.POST, headers: UTILS.HEADERS } }));

let ENDPOINTS = [].concat(GET, POST);

export default ENDPOINTS;
