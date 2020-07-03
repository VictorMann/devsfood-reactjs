const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0,
};

export default (state = initialState, action) => {

    if (action.type === 'ADD_PRODUCT') 
    {
        let products = [...state.products];
        let id  = action.payload.data.id;

        let index = products.findIndex(item => item.id === id);

        if (index != -1) {
            products[index].quantity += action.payload.quantity;
        } else {
            products.push({
                ...action.payload.data,
                quantity: action.payload.quantity
            });
        }
        
        return {...state, products};
    } 
    else if (action.type === 'CHANGE_PRODUCT') 
    {
        let products = [...state.products];
        let index = action.payload.index;
        let type = action.payload.type; // +/-

        if (products[index]) {
            if (type === '-') {
                products[index].quantity -= 1; // decrementa
                // verifca se quantidade é ZERO
                if (products[index].quantity === 0) {
                    // remove produto
                    delete products[index];
                    products = products.flat();
                } 
            } else {
                products[index].quantity += 1; // incrementa
            }

            return {...state, products};
        }
    }

    return state;
}