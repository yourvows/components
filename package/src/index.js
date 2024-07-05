export const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

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

export const isUzPhone = (val) => {
    const phone = val.replace(/[\s)(-]/g, '')
    return phone.length === 9 && validPhones.includes(phone.substring(0, 2))
}


export function formatPhoneNumber(phoneNumber) {
    // Remove any non-digit characters
    if (phoneNumber) {
        const cleanedNumber = phoneNumber.replace(/\D/g, '')

        // Check if the cleaned number has 12 digits
        if (cleanedNumber.length !== 12) {
            return phoneNumber
        }

        // Use regex capturing groups to format the number
        return cleanedNumber.replace(
            /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
            '+$1 $2 $3 $4 $5'
        )
    }
}

export function formatMoneyDecimal(number, fix = 0, option = 'decimal') {
    let style: string
    if (['USD', 'RUB'].includes(option)) {
        style = 'currency'
    } else if (['kilogram', 'meter', 'percent'].includes(option)) {
        style = 'unit'
    } else {
        style = ''
    }

    const newStyle: string = style
    const option2 = {
        newStyle, //  unit currency percent decimal
        [newStyle]: option,
        maximumFractionDigits: fix,
        minimumFractionDigits: fix,
    }
    return number ? new Intl.NumberFormat('ru-RU', option2).format(number) : '0'
}

