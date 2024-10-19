import TasksWrapperStyles from "./style.module.css";
export default function CommonContainer(props){
    return(
        <div className={TasksWrapperStyles.container}>{props.children}</div>
    )
}