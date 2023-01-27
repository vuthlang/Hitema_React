const AddProduct = (item) => {

    let [cart, setCart] = useState([])

    let localCart = localStorage.getItem("cart");

    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];

    //assuming we have an ID field in our item
    let { ID } = item;

    //look for item in cart array
    let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);

    //if item already exists
    if (existingItem) {
        existingItem.quantity += item.quantity //update item
    } else { //if item doesn't exist, simply add it
        cartCopy.push(item)
    }

    //update app state
    setCart(cartCopy)

    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)


    //this is called on component mount
    useEffect(() => {
        //turn it into js
        localCart = JSON.parse(localCart);
        //load persisted cart into state if it exists
        if (localCart) setCart(localCart)

    }, []) //the empty array ensures useEffect only runs once

    return (<>

    </>);
}

export default AddProduct;