const path = require('path')
const fs = require('fs')


export const rootPath = path.resolve(__dirname, '../')
export const packagesPath = path.resolve(__dirname, 'packages')



export function getPkgJson(pkgName) {
    const pkgPath = path.resolve(packagesPath, pkgName, 'package.json')
    
}