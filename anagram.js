const anagram = (str1, str2) => {
    return formatstr(str1) === formatstr(str2);

}
const formatstr= str => {
        return str
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join("");
}

export default anagram;