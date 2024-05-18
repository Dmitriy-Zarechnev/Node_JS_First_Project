"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRepository = void 0;
const addresses = [{ id: 1, value: 'Street 15' }, { id: 2, value: 'Street 20' }];
exports.addressesRepository = {
    getAddress() {
        return addresses;
    },
    findAddressById(addressId) {
        return addresses.find((el) => el.id === addressId);
    }
};
