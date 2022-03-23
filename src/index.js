const express = require("express")
const mqttClient = require("mqtt")
const helloRoute =  require("../routes/hello")
const commandRoute = require("../routes/command")
const dataRoute = require("../routes/data")

const application = express()
const serverPort = 3010

const conn = mqttClient.connect('mqtt://broker.emqx.io')

conn.on('connect', () =>{
    console.log("Connected to broker")
    conn.subscribe('kamilimu/iot/Zeinab/data', (err) => {
        if(err){
            console.log(`Error subscribing due to ${err.message}`)
        }
    })
})

conn.on('message', (topic, message) =>{
    console.log(`New message: ${message.toString()}\nTopic: ${topic.toString()}`)
})

conn.on('disconnect', (packet) =>{
    console.log('disconected')
    conn.reconnect()
})

application.use("/hello", helloRoute)
application.use("/command", commandRoute)
application.use("/data", dataRoute)

application.listen(serverPort, () =>{
    console.log(`Application server running on port ${serverPort}\nPress Ctrl+C to exit`)
})
