const validPhones = [
    '90',
    '91',
    '33',
    '50',
    '93',
    '94',
    '88',
    '95',
    '97',
    '98',
    '99',
    '77',
    '20',
]

/**
 * Check if phone is valid
 * @param val - phone number
 */

const isValidPhone = (val: string) => {
    const phone = val.replace(/[\s)(-]/g, '')
    return phone.length === 9 && validPhones.includes(phone.substring(0, 2))
}

module.exports = {isValidPhone}