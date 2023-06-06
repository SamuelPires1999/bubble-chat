import { Meteor } from 'meteor/meteor';

Meteor.startup(async () => {
  console.log('meteor server up!! 🔥')
});


Meteor.methods({
  'chat.create'(params) {
      console.log({
          method: "chat.create",
          targetId: params.targetId,
          message: "Called method chat.create with targetId"
      })
  }
})