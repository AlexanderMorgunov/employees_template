import "./app-info.css";

const AppInfo = ({qualityEmployees, qualityIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {qualityEmployees}</h2>
            <h2>Премию получат: {qualityIncrease}</h2>
        </div>
    )
}

export default AppInfo;