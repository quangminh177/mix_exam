let newDate = () => {
    return new Date();
}

let convertToDate = (date) => {
    let dateParts = date.split("/");
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
}

module.exports = {
    newDate: newDate,
    convertToDate: convertToDate
};