const { structure } = require('./structure');

const fs = require('fs')
const path = require('path')

structure.map( (branch , branch_index) => {

  let branchFolder = branch.branch

  if (!fs.existsSync(branchFolder)) {
    fs.mkdirSync(branchFolder)
  }
  
  branch.standards.map( ( standard , standard_index ) => {

    let standardFolder = branch.branch + '/' + standard.standard;

    if (!fs.existsSync(standardFolder)) {
      fs.mkdirSync( standardFolder )
    }

    standard.seasons.map( (season , season_index) => {

      let seasonFolder = 
      branch.branch + '/' + 
      standard.standard + '/' + 
      `${season.number} فصل` ;

      if (!fs.existsSync(seasonFolder)) {
        fs.mkdirSync( seasonFolder )
      }

    })
  })

})

