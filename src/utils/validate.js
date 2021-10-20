export function validator(data, config) {
    const errors = {}
    function validate(validateMethod, data, config) {
        let statusValidate
        switch (validateMethod) {
            case 'isRequired':
                statusValidate = data.trim() === ''
                break
            case 'isEmail': {
                const emailRegExp = /\S+@\S+\.\S+$/g
                statusValidate = !emailRegExp.test(data)
                break
            }
            case 'isCapitalSymbol': {
                const capitalRegExp = /[A-Z]+/g
                statusValidate = !capitalRegExp.test(data)
                break
            }
            case 'isContainDigit': {
                const digitRegExp = /\d+/g
                statusValidate = !digitRegExp.test(data)
                break
            }
            case 'min': {
                statusValidate = data.length < config.value
                break
            }
            case 'isValidNumb': {
                statusValidate = !(
                    data > 1921 && data < new Date().getFullYear() - 17
                )
                break
            }
            case 'isLink': {
                const linkRegExp =
                    /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+/g
                statusValidate = !linkRegExp.test(data)
                break
            }
            case 'valIsRequired': {
                statusValidate = data.value
                break
            }

            default:
                break
        }
        if (statusValidate) return config.message
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            )
            if (error && !errors[fieldName]) {
                errors[fieldName] = error
            }
        }
    }

    return errors
}
