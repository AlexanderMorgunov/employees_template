import { Component } from "react";
import "./app-filter.css";

const AppFilter = (props) => {

const {onFilterSelect, filter} = props;

    // let onFilter = (e) => {
    //     props.onFilter(props.visibleData,e);
    // }
    
    const buttonsData = [
        {
            name:'all',
            text:'Все сотрудники'
        },
        {
            name:'rise',
            text:'На повышение'
        },
        {
            name:'salaryMore1k',
            text:'З/П больше 1000$'
        },
    ];

    let buttons = buttonsData.map(({name,text}) => {

        const active = name === filter;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
            className={`btn ${clazz}`}
            key={name}
            onClick={() => onFilterSelect(name)}
            >
            {text}
            </button>
        )
        
    })

        return (
            <div className="btn-group">
                {/* <button type="button"
                        className="btn btn-light"
                        data-attr='allEmpl'
                        onClick={(e) => (onFilter(e))}>
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light" data-attr='rise'
                        onClick={(e) => (onFilter(e))}>
                        На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light" 
                        onClick={(e) => (onFilter(e))}
                        data-attr='salary'
                        >
                        З/П больше 1000$
                </button> */}
            
                {buttons} 

            </div>
        )
}

export default AppFilter;