export const findDuplicate = (arr) => {
    const result = arr.filter((value, index, array) => array.indexOf(value) == index);
    return result;
}
