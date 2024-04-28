
const initializeUsers = () => ([
    { username: 'Squiggles', password: 'wordpass' },
    { username: 'Scrambles', password: 'secrettop' },
  ])
  
  let users = initializeUsers()
  
  const find = () => {
    return Promise.resolve(users)
  }
  
  const insert = ({ username, password }) => {
    const newUser = { username, password }
    users.push(newUser)
    return Promise.resolve(newUser)
  }
  
  module.exports = {
    find,
    insert,
  }