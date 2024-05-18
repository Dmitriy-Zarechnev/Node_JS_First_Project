type Addresses = {
    id: number,
    value: string
}
const addresses: Addresses[] = [{id: 1, value: 'Street 15'}, {id: 2, value: 'Street 20'}]


export const addressesRepository = {
    getAddress() {
        return addresses
    },
    findAddressById(addressId: number) {
        return addresses.find((el) => el.id === addressId)
    }

}