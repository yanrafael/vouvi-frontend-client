import FeedbackCard from "../../Cards/FeedbackCard"
import PrimaryButton from '../../Buttons/PrimaryButton'
import SecondaryButton from "../../Buttons/SecondaryButton"
import Subscription from "../../Cards/SubscriptionCard"
import FiveStars from '../../../assets/images/fivestars-icon.svg'
function Low() {

    const TextGradient = "text-[transparent] bg-[linear-gradient(90deg,#F5F5F4_12.77%,#8F8F8E_86.51%)] bg-clip-text"

    return (
        <>
            <section className="flex m-auto w-10/12 bg-slate-500 relative mt-[200px]">
                <div className="flex flex-col w-[60%]">
                    <div className="flex justify-between">
                        <FeedbackCard color={"bg-[#FA7ABC] text-[#A90057]"} text={"Manda a real!"} />
                        <FeedbackCard img={FiveStars} color={"bg-[#FABE7A] text-[#773F00]"} text={"Avalie-nos"} />
                    </div>
                    <div className="flex justify-between mt-6">
                        <FeedbackCard color={"bg-[#84CE7A] text-[#0A5800]"} text={"Solta o verbo!"} />
                        <FeedbackCard color={"bg-[#B88AD9] text-[#480479]"} text={`Diz aí, Mandamos bem?`} />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start ml-10 w-[40%]">
                    <div className="flex flex-col">
                        <h1 className={`${TextGradient} text-2xl`}>A Gente Cresce Com Seu Feedback</h1>
                        <p className={`${TextGradient} text-base mt-5 mb-16`}>Você faz parte do Time!<br /> Queremos te ouvir!</p>
                    </div>
                    <SecondaryButton text={"Enviar Feedback!"} />
                </div>
            </section>

            <section>
                <h1 className={`${TextGradient} text-2xl text-center xl:leading-[1.2] mt-[160px]`}>Escolha o plano para virar o jogo</h1>
                <p>Do básico ao premium, tem um plano certinho pra sua caminhada financeira. Bora começar e subir de nível!</p>
                <div className="flex justify-around">
                    <Subscription
                        color={"bg-secondary-200"}
                        colortitle={"text-[#002952]"}
                        title={"Free"} price={"Gratuito"}
                        text1={"Acesso a materiais gratuitos de educação financeira"}
                        text2={"Dicas semanais sobre economia."}
                        text3={"Ideal para quem está começando a aprender sobre finanças."}
                    />
                    <Subscription
                        color={"bg-primary-200"}
                        colortitle={"text-[#35005B]"}
                        title={"Premium"} price={"R$29,99"} mes={"/Mês"}
                        text1={"Relatórios detalhados de despesas."}
                        text2={"Suporte financeira por chat."}
                        text3={"Ferramentas avançadas de orçamento e metas de poupança."}
                    />
                    <Subscription color={"bg-[#FFB12099]"}
                        colortitle={"text-[#583900]"}
                        title={"Bussines"} price={"R$99,99"} mes={"/Mês"}
                        text1={"Relatórios e controle de fluxo de caixa."}
                        text2={"Múltiplos usuários com permissões personalizadas."}
                        text3={"Suporte financeira especializada para negócios."}
                    />
                </div>
            </section>

            <section>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ex repellat sint soluta explicabo libero voluptate dignissimos perferendis doloribus at, est quasi eaque ab, suscipit eos qui nostrum quas necessitatibus.</p>
                <PrimaryButton text={"Começar agora!"} />
            </section>
        </>
    )
}
export default Low