import Style from './css/style.module.css'

// create another call function
function call() {
    return (
        <h1 className={Style.title}>Call Function Called</h1>
    )
}

function Msg() {
    return (
        <div>
            {/* called another function call() in expression {} */}
            {
                call()
            }
            <h1 className={Style.title}>Called H1 Section</h1>
        </div >
    );
}

export default Msg;