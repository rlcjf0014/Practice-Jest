import axios from "axios";

const functions = {
    add: (num1:number, num2:number) => num1 + num2,
    isNull: ():null => null,
    checkValue: (x:any):any => x,
    createUser: ():{firstName: string, lastName:string} => {
        const user:{firstName: string, lastName:string} = {firstName: "Joshua", lastName:null};
        user["lastName"] = "Song";
        return user;
    },
    fetchUser: () => axios.get("https://koreanjson.com/users/1")
        .then(res => res.data)
        .catch(() => "error")
     
}

export default functions;