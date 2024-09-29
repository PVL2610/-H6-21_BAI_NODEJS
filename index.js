function isValidDate(dateString) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(dateString)) {
        return false;
    }

    const [day, month, year] = dateString.split('-').map(Number);

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) {
        return false;
    }
    const date = new Date(year, month - 1, day);
    return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
}

console.log(isValidDate("29-02-2020"));
console.log(isValidDate("30-02-2021"));
console.log(isValidDate("31-04-2021"));
console.log(isValidDate("15-13-2021"));

