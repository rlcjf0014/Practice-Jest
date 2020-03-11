import axios from "axios";

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull:() => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {firstName: "Joshua"};
        user["lastName"] = "Song";
        return user;
    },
    fetchUser: () => axios.get("https://koreanjson.com/users/1")
        .then(res => res.data)
        .catch(err => "error")
     
}

export default functions;