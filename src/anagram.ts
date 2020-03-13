const anagram = (str1:string, str2:string):boolean => {
    return formatstr(str1) === formatstr(str2);

};
const formatstr = (str:string):string => {
        return str
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
};

export default anagram;