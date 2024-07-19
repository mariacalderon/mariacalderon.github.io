import { Trans } from "react-i18next";

export function FormattingTranslation(key) {
  return (
    <div className="whitespace-break-spaces">
      <Trans i18nKey={key} components={{
        bold: <b />
      }} />
    </div>
  )
}