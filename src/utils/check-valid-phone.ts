const validCountryCodes = [
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
 * @param phoneNumber - phone number
 */

export const isValidPhone = (phoneNumber: string) => {
    const phone = phoneNumber.replace(/[\s)(-]/g, '')
    return phone.length === 9 && validCountryCodes.includes(phone.substring(0, 2))
}