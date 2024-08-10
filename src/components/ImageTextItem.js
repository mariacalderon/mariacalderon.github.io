import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const ImageTextItem = (props) => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <motion.div
      className={`flex ${props.imageOnRight ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-16 ${props.animated && 'cursor-pointer'} ${props.styling} sm:flex-col-reverse`}
      whileHover={{
        scale: props.animated ? 1.03 : 1,
        transition: { duration: 0.4 },
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, duration: 2 }}
      onClick={() => {
        if (props.path) navigate(props.path, {state: {from: location}})
      }}
    >
      <div className="flex w-full max-w-md">
        <img src={props.image} alt={props.image_alt}/>
      </div>
      <div className="flex flex-col gap-12 w-full max-w-md">
        {props.children}
      </div>
    </motion.div>
  )
}

export default ImageTextItem;