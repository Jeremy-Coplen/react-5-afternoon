const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE"
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_PROP = "UPDATE_PROP"
const UPDATE_FOUND = "UPDATE_FOUND"
const UPDATE_REAL_ESTATE_AGENT = "UPDATE_REAL_ESTATE_AGENT"
const UPDATE_COST = "UPDATE_COST"
const UPDATE_DOWN_PAYMENT = "UPDATE_DOWN_PAYMENT"
const UPDATE_CREDIT = "UPDATE_CREDIT"
const UPDATE_HISTORY = "UPDATE_HISTORY"
const UPDATE_ADDRESS_ONE = "UPDATE_ADDRESS_ONE"
const UPDATE_ADDRESS_TWO = "UPDATE_ADDRESS_TWO"
const UPDATE_ADDRESS_THREE = "UPDATE_ADDRESS_THREE"
const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME"
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME"
const UPDATE_EMAIL = "UPDATE_EMAIL"

export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

export function updateRealEstateAgent(agent) {
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: agent
    }
}

export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDownPayment(downPayment) {
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: downPayment
    }
}

export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateAddressOne(addressOne) {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}

export function updateAddressTwo(addressTwo) {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: addressTwo
    }
}

export function updateAddressThree(addressThree) {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}

export function updateFirstName(firstName) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}

export function updateLastName(lastName) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}

export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

const initialState = {
   loanType:  "Home Purchase",
   propertyType: "Single Family Home",
   city: "",
   propToBeUsedOn: "",
   found: "false",
   realEstateAgent: "false",
   cost: 0,
   downPayment: 0,
   credit: "",
   history: "",
   addressOne: "",
   addressTwo: "",
   addressThree: "",
   firstName: "",
   lastName: "",
   email: ""
}

function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_LOAN_TYPE: {
            const newLoanType = action.payload
            const newState = Object.assign({}, state, {loanType: newLoanType})
            return newState
        }
        case UPDATE_PROPERTY_TYPE: {
            const newPropertyType = action.payload
            const newState = Object.assign({}, state, {propertyType: newPropertyType})
            return newState
        }
        case UPDATE_CITY: {
            const newCity = action.payload
            const newState = Object.assign({}, state, {city: newCity})
            return newState
        }
        case UPDATE_PROP: {
            const newProp = action.payload
            const newState = Object.assign({}, state, {propToBeUsedOn: newProp})
            return newState
        }
        case UPDATE_FOUND: {
            const newFound = action.payload
            const newState = Object.assign({}, state, {found: newFound})
            return newState
        }
        case UPDATE_REAL_ESTATE_AGENT: {
            const newAgent = action.payload
            const newState = Object.assign({}, state, {realEstateAgent: newAgent})
            return newState
        }
        case UPDATE_COST: {
            const newCost = action.payload
            const newState = Object.assign({}, state, {cost: newCost})
            return newState
        }
        case UPDATE_DOWN_PAYMENT: {
            const newDownPayment = action.payload
            const newState = Object.assign({}, state, {downPayment: newDownPayment})
            return newState
        }
        case UPDATE_CREDIT: {
            const newCredit = action.payload
            const newState = Object.assign({}, state, {credit: newCredit})
            return newState
        }
        case UPDATE_HISTORY: {
            const newHistory = action.payload
            const newState = Object.assign({}, state, {history: newHistory})
            return newState
        }
        case UPDATE_ADDRESS_ONE: {
            const newAddress = action.payload
            const newState = Object.assign({}, state, {addressOne: newAddress})
            return newState
        }
        case UPDATE_ADDRESS_TWO: {
            const newAddress = action.payload
            const newState = Object.assign({}, state, {addressTwo: newAddress})
            return newState
        }
        case UPDATE_ADDRESS_THREE: {
            const newAddress = action.payload
            const newState = Object.assign({}, state, {addressThree: newAddress})
            return newState
        }
        case UPDATE_FIRST_NAME: {
            const newName = action.payload
            const newState = Object.assign({}, state, {firstName: newName})
            return newState
        }
        case UPDATE_LAST_NAME: {
            const newName = action.payload
            const newState = Object.assign({}, state, {lastName: newName})
            return newState
        }
        case UPDATE_EMAIL: {
            const newEmail = action.payload
            const newState = Object.assign({}, state, {email: newEmail})
            return newState
        }
        default: return state
    }
}

export default reducer;