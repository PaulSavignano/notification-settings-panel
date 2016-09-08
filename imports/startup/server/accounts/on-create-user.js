import { Accounts } from 'meteor/accounts-base'

Accounts.onCreateUser((options, user) => {
  const profile = options.profile
  const newUser = user
  if (profile) {
    profile.notifications = {
      productUpdate: true, 
      productAvailability: true,
    }
    newUser.profile = profile
  }
  console.log(newUser)
  return newUser
})
