import React from 'react'
import { stType, stType as stTypeValues } from '../Data/studyType'

const FieldOutput = ({ label, user, name }) => {
    const ageAmout = (ages) => {
        const years = new Date().getFullYear() - ages
        let yearsStr = years.toString()

        if (yearsStr.substr(yearsStr.length - 1) === '1') {
            yearsStr += ' год'
        } else if (yearsStr.substr(yearsStr.length - 1) in ['2', '3', '4']) {
            yearsStr += ' года'
        } else {
            yearsStr += ' лет'
        }
        return yearsStr
    }
    const renderSwitch = (user, name) => {
        switch (name) {
            case 'portfolio':
                return <a href={user[name]}>{user[name]}</a>
                break

            case 'yearOfBirth':
                return user[name] + ' (' + ageAmout(user[name]) + ')'
                break

            case 'stType':
                let stTypeName = ''
                Object.keys(stTypeValues).map((value) => {
                    if (stTypeValues[value]['type'] === user[name]) {
                        stTypeName = stTypeValues[value]['name']
                    }
                })
                return stTypeName
                break

            default:
                return user[name]
        }
    }

    return (
        <div>
            <span>
                <strong>{label}: </strong>
            </span>
            <span>{renderSwitch(user, name)}</span>
        </div>
    )
}

export default FieldOutput
