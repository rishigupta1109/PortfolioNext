import style from "../../CSS/Backdrop.module.css"
const Backdrop = () => {
    return (
        <div style={{height:window.innerHeight}} className={style.backdrop}></div>
    );
}
export default Backdrop;