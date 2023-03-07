import './App.css'
import { motion, useScroll } from 'framer-motion'

export default function Aula02(props) {
  const { scrollYProgress } = useScroll()

  return (
    <section className="scroll">
      <motion.div style={{ scaleX: scrollYProgress }}>
        <div className="progress-bar"></div>
      </motion.div>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est a dicta quis qui, eaque, doloribus, delectus ullam necessitatibus
          atque fuga vel aliquid. Quasi obcaecati, quisquam impedit qui
          explicabo consectetur. Maecenas quis elementum nulla, in lacinia nisl.
          Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada.
          Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
          faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis
          ligula. Integer ac enim vel felis pharetra laoreet. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Pellentesque
          hendrerit ac augue quis pretium.
        </p>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est a dicta quis qui, eaque, doloribus, delectus ullam necessitatibus
          atque fuga vel aliquid. Quasi obcaecati, quisquam impedit qui
          explicabo consectetur. Maecenas quis elementum nulla, in lacinia nisl.
          Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada.
          Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
          faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis
          ligula. Integer ac enim vel felis pharetra laoreet. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Pellentesque
          hendrerit ac augue quis pretium.
        </p>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est a dicta quis qui, eaque, doloribus, delectus ullam necessitatibus
          atque fuga vel aliquid. Quasi obcaecati, quisquam impedit qui
          explicabo consectetur.
        </p>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est a dicta quis qui, eaque, doloribus, delectus ullam necessitatibus
          atque fuga vel aliquid. Quasi obcaecati, quisquam impedit qui
          explicabo consectetur. Maecenas quis elementum nulla, in lacinia nisl.
          Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada.
          Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
          faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis
          ligula. Integer ac enim vel felis pharetra laoreet. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Pellentesque
          hendrerit ac augue quis pretium.
        </p>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          est a dicta quis qui, eaque, doloribus, delectus ullam necessitatibus
          atque fuga vel aliquid. Quasi obcaecati, quisquam impedit qui
          explicabo consectetur. Maecenas quis elementum nulla, in lacinia nisl.
          Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada.
          Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis
          faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis
          ligula. Integer ac enim vel felis pharetra laoreet. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Pellentesque
          hendrerit ac augue quis pretium.
        </p>
        <span>...</span>
      </motion.div>
    </section>
  )
}
