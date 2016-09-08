import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Notifications } from '../components/notifications'
import { Loading } from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('users.notifications')
  if (subscription.read()) {
    const user = Meteor.users.findOne()
    const notifications = user && user.profile ? user.profile.notifications : {}
    onData(null, { notifications })
  }
}

export default composeWithTracker(composer, Loading)(Notifications)
