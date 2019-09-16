import PubSub from 'pubsub-js'

const $bus = {
    emit: function (eventId,data) { 
        //消息同步发布
        PubSub.publishSync('global-bus'+ "-" + eventId,data)
    },

    emitAsync: function(eventId,data) {
        //消息异步发布
        PubSub.publish('global-bus'+ "-" + eventId,data)
    },

    on: function(eventId,cb) {
        PubSub.subscribe('global-bus'+ "-" + eventId,function(msg,data){
            cb(data)
        })
    },

    off: function(...eventIds) {
        eventIds.forEach(_ => {
            PubSub.unsubscribe('global-bus'+ "-" + _)
        })
    }
}

export default $bus