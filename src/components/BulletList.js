import { useTranslation } from "react-i18next";

const BulletList = (props) => {

  const { t } = useTranslation();
  return (
    <div className="text-lg">
      {
        props.list.map((item) => {
          return (
            <div key={`bullet-${item}`} className="flex flex-row gap-2">
              · {t(item)}
            </div>
          )
        })
      }
    </div>
  )
}

export default BulletList;