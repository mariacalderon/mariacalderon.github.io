import { FormattingTranslation } from "../utils/translationHook";

const BulletList = (props) => {
  return (
    <ul className={`pl-6 list-disc text-lg ${props.styling}`}>
      {
        props.list.map((item) => {
          return (
            <li key={`bullet-${item}`} className="pl-2">
              {FormattingTranslation(item)}
            </li>
          )
        })
      }
    </ul>
  )
}

export default BulletList;