/// <reference path = "events.d.ts" />
import { readdirSync, readFileSync, writeFileSync } from "fs"
const jsonFiles = readdirSync("./events")
const eventList = new Array<HistoryEvent>()
console.log(jsonFiles)
jsonFiles.forEach(file => {
    var event: HistoryEvent = JSON.parse(readFileSync(`events/${file}`).toString("utf-8"))
    console.log(event)
    eventList.push(event)
});
const events: HistoryEventList = { events: eventList }
console.log(JSON.stringify(events))
writeFileSync("public/build/events.json", JSON.stringify(events))

