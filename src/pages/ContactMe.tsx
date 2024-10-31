
// @ts-ignore: Deno hates images
import DKM2 from '../public/assets/WIZARDMONKEY2.jpg'

export default function ContactMe() {
  return (
    <main>
      <div className="flex flex-col text-center">
        <div className="flex justify-center"><img className="screenshot" src={DKM2} alt="tech wizard monkey" /></div>
        <h2 className="text-3xl mt-10">If you ever need a tech wizard at your side <br />
          Dont hesitate to summon me by:</h2>
        <a href="mailto:daniel_runge_@hotmail.com">
          Email, at Daniel_Runge_@hotmail.com
        </a>
        <a href="https://github.com/DanishKodeMonkey">DanishKodeMonkey on GitHub.com</a>
        <a href="www.linkedin.com/in/daniel-ljung-runge-3ba014a1">Daniel Ljung Runge on LinkedIn</a>
      </div>
    </main>
  )
}
