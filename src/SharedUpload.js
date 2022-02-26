export default function SharedUpload(props) {
    return <tr className='trList'>
        <td className='tdList' style={{ textAlign: 'left' }}>{props.sharedUpload.label}</td>
        <td className='tdList'>{props.sharedUpload.fileName}</td>
        <td className='tdList'>{props.sharedUpload.sharedBy}</td>
    </tr>
}