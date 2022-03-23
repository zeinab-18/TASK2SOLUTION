const express = require("express")
const mqttClient = require("mqtt")
const helloRoute =  require("../routes/hello")

const application = express()
const serverPort = 3010

const conn = mqttClient.connect('mqtt://broker.emqx.io')

conn.on('connect', () =>{
    console.log("Connected to broker")
    conn.subscribe('kamilimu/iot/<CHANGE-THIS-TO-YOUR-NAME>/data', (err) => {
        if(err){
            console.log(`Error subscribing due to ${err.message}`)
        }
    })
})

conn.on('message', (topic, message) =>{
    console.log(`New message: ${message.toString()}\nTopic: ${topic.toString()}`)
})

application.use("/hello", helloRoute)

application.listen(serverPort, () =>{
    console.log(`Application server running on port ${serverPort}\nPress Ctrl+C to exit`)
})
