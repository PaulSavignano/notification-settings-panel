import { Meteor } from 'meteor/meteor'

Meteor.publish('users.notifications', function usersNotificationsPublication() {
  return Meteor.users.find({ _id: this.userId }, { fields: { profile: 1 } })
})
