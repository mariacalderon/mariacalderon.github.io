import { useTranslation } from "react-i18next";
import { PROJECT_DETAIL_PROCESS, PROJECT_DETAILS_BASIC } from "../utils/constants";

const ProjectDetails = (props) => {

  const { t } = useTranslation();

  const renderSectionData = (type) => {
    switch(type) {
      case 'roles': 
        return (
          <div className="flex flex-col gap-2">
            {
              props.roles.map((role) => {
                return (
                  <div key={`${props.projectTitle}-${role}`}>
                    {t(role)}
                  </div>
                )
              })
            }
          </div>
        )
      case 'team':
        return (
          <div className="flex flex-col gap-2">
            {
              props.team.map((teamItem) => {
                return (
                  <div key={`${props.projectTitle}-${t(teamItem.role, {count: teamItem.count})}`}>
                    {t(teamItem.role, {count: teamItem.count})}
                  </div>
                )
              })
            }
          </div>
        )
      case 'tools':
        return (
          <div className="flex flex-col gap-2">
            {
              props.tools.map((tool) => {
                return (
                  <div key={`${props.projectTitle}-${tool}`}>
                    {tool}
                  </div>
                )
              })
            }
          </div>
        )
      case 'timing':
        return (
          <div className="flex flex-col gap-2">
            {
              props.timing.map((time) => {
                return (
                  <div key={`${props.projectTitle}-${t(time.timeUnit, {time: time.count})}`}>
                    {t(time.timeUnit, {time: time.count})}
                  </div>
                )
              })
            }
          </div>
        )
      default:
        return;
    }
  };

  const renderProcessData = () => {
    return props.process.map((proc, index) => {
      const item = PROJECT_DETAIL_PROCESS.sections.find(section => section.id === proc);
      return (
        <div key={`${props.projectTitle}-${proc}`} className="flex flex-row sm:flex-col sm:items-center">
          <div className="flex flex-col items-center">
            <div className="w-8">
              {
                item.icon ?? <img src={item.iconPath} alt={`icon-${item.id}`} />
              }
            </div>
            <div className="text-2xl font-bold pt-1">
              {t(item.titleKey)}
            </div>
          </div>
          {
            index + 1 !== props.process.length &&
            <div className="w-[95px] h-1/4 border-b-2 border-gray sm:w-[2px] sm:h-[32px] sm:border-b-0 sm:border-l-2"></div>
          }
        </div>
      )
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between sm:flex-col sm:gap-4 sm:items-center">
        {
          PROJECT_DETAILS_BASIC.map((section) => {
            if (props[section.id].length === 0) return (<div key={`${props.projectTitle}-${section.id}`}></div>)
            return (
              <div key={`${props.projectTitle}-${section.id}`} className="flex flex-col w-full max-w-[70%] gap-2">
                <div className="flex flex-row items-center gap-4">
                  <div className="w-12 flex items-start">
                    {
                      section.icon ?? <img src={section.iconPath} alt={`icon-${section.id}`} />
                    }
                  </div>
                  <div className="font-bold text-2xl">
                    {t(section.titleKey)}
                  </div>
                </div>
                <div className="font-medium text-gray pl-16">
                  {renderSectionData(section.id)}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold">
          {t(PROJECT_DETAIL_PROCESS.titleKey)}
        </div>
        <div className="flex flex-row sm:flex-col sm:items-center">
          {renderProcessData()}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;