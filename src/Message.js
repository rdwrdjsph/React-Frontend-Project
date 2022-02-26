export default function Message(props) {
    return <p className="m-0">[{props.message.timestamp}] {props.message.name}: {props.message.content}</p>
}