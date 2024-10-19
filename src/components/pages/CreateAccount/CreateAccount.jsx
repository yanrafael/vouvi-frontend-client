import CreateAccountStep1 from "./CreateAccountStep1";

function CreateAccount() {
    return (
        <div className="flex justify-center items-center h-[90vh] m-5">
            <form className="flex flex-col gap-4 bg-white bg-opacity-90 w-[40%] h-full rounded-sm p-10" action="">
                <CreateAccountStep1 />
            </form>
        </div>
    );
}

export default CreateAccount