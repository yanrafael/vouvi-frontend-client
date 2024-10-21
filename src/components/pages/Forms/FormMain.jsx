import FormCard from "../../Cards/FormCard"
import Title from "../../Cards/FormTitle"
import InfoButton from "../../Buttons/InfoButton"
import SecondaryButton from "../../Buttons/SecondaryButton"
function FormMain() {
    return (
        <div className="flex items-center justify-center w-[100vw] h-[100vh]">
            <FormCard className="flex items-center justify-center flex-col">
                <p className="text-[#FFFFFF] w-[892px] h-[60px] text-md m-auto mb-10 text-center">Conta pra gente o que você precisa e onde quer chegar com suas finanças. Vamos juntos nessa?</p>

                <Title text="Qual é o seu objetivo principal com a educação financeira?" />
                <div className="flex flex-wrap p-5 gap-6 rounded-lg mb-20">
                    <InfoButton
                        text="Organizar finanças" />
                    <InfoButton
                        text="Aprender educação financeira" />
                    <InfoButton
                        text="Sair das dívidas" />
                    <InfoButton
                        text="Insvestir melhor" />
                </div>

                <div className=" w-[90%] m-auto mt-5 flex justify-between">
                    <SecondaryButton
                        text="Preencher depois" />
                    <SecondaryButton
                        text="Próximo" />
                </div>
            </FormCard>
        </div>
    )
}
export default FormMain