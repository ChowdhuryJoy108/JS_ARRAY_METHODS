// object destructuring

const address = {
    street:'6th  street',
    city:'',
    country:'',
    postal:{
        code:123,
        id:122,
        office:"north carolina"
    }
};

// const street = address.street;
const  city = address.city;
const country = address.country;


const { street:st, postal:{office} } = address;
console.log(st , office);