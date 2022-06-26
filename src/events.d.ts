type HistoryEventType = "meme" | "anime"
interface HistoryEvent {
    title: string,
    image: string,
    eventType: HistoryEventType,
    date: string
}
interface HistoryEventList {
    events: Array<HistoryEvent>
}