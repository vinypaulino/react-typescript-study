import Button from "../Button";
import style from "./Chronometer.module.scss";
import Clock from "./Clock";

export function Chronometer() {
    return (
        <>
            <div className={style.chronometer}>
                <p className={style.title}> Escolha um card e inicie o cronômetro </p>

                <div className={style.clockWrapper}>
                    <Clock/>
                </div>
                <Button>
                    Começar!
                </Button>
            </div>
        </>
    )
}