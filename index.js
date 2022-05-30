const chalk = require('chalk')
const boxen = require('boxen')
 
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
 
const data = {
  name: chalk.white('Jey Godoy /'),
  handle: chalk.white('JeyGodoy'),
  work: chalk.cyan('Software Developer in training'),
  github: chalk.cyan('https://github.com/jeygodoy'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/jey-godoy/'),
  email: chalk.cyan('jeygodoy25@gmail.com'),
  npx: chalk.cyan('npx cardjeygodoy'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelEmail: chalk.white.bold('     email:'),
  labelCard: chalk.white.bold('      Card:')
}

const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const emailning = `${data.labelEmail}  ${data.email}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + githubing + newline + linkedining + newline + emailning + newline + newline + carding


module.exports=()=> chalk.green(boxen(output, options));