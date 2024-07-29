import { FormattingTranslation } from "../utils/translationHook";

const BulletList = (props) => {

  const renderListItem = () => {
    return props.list.map((item) => {
      return (
        <li key={`bullet-${item}`} className="pl-2 pb-4">
          {FormattingTranslation(item)}
        </li>
      )
    })
  }

  return (
    <ol className={`pl-6 marker:font-bold ${props.ordered ? 'list-decimal':'list-disc'} text-lg ${props.styling}`}>
      {renderListItem()}
    </ol>
  )
}

export default BulletList;