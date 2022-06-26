/// <reference path = "events.d.ts" />
import { readdirSync, readFileSync, writeFileSync } from "fs"
const jsonFiles = readdirSync("./events")
const eventList = new Array<HistoryEvent>()
jsonFiles.forEach(file => {
    console.log(`Processing ${file}...`)
    var event: HistoryEvent = JSON.parse(readFileSync(`events/${file}`).toString("utf-8"))
    eventList.push(event)
});
const events: HistoryEventList = { events: eventList }
writeFileSync("public/build/events.json", JSON.stringify(events))
console.log("Success")

