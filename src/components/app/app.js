import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    data: [
      {name:'John C.',salary:'800', increase:false, rise: false, id: 1},
      {name:'Alex M.',salary:'3000', increase:true, rise: true, id: 2},
      {name:'Carl W.',salary:'5000', increase:false, rise: false, id: 3},
      {name:'Tommy V.',salary:'15000', increase:true, rise: false, id: 4}
    ], 
    term:'',
    filter:'all',
    // salaryToggleFilter:''

  }
  this.maxId = 5;
}


deleteItem = (id) => {
  this.setState(({data}) => {

    let newArr = data.filter(item => item.id !== id);
    return {
      data: newArr
    }

  })

  // if(this.state.salaryToggleFilter.length > 0) {

  //   this.setState(({salaryToggleFilter}) => {

  //     let newArr = salaryToggleFilter.filter(item => item.id !== id);
  //     return {
  //       salaryToggleFilter: newArr
  //     }

  //   })
 
  // }

}

addItem = ({name, salary}) => {
  if(name&&salary) {

    let newItem = {
      name,
      salary,
      increase: false,
      rise:false,
      id: this.maxId++
    };
  
  
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })

  }
  
}

onToggleProp = (id, prop) => {

  this.setState(({data}) => ({
    data: data.map(item => {
      if(item.id === id) {
        return {...item, [prop]: !item[prop]}
      } else {
        return item;
      }
    })
  }))

  // if(this.state.salaryToggleFilter.length > 0) {
  //   this.setState(({salaryToggleFilter}) => ({
  //     salaryToggleFilter: salaryToggleFilter.map(item => {
  //       if(item.id === id) {
  //         return {...item, [prop]: !item[prop]}
  //       } else {
  //         return item;
  //       }
  //     })
  //   }))
  // }

}

searchEmp = (items, term) => {
  if(term.length === 0) {
    return items;
  } 
  return items.filter(item => {
    return item.name.search(term) > -1;
  })

} 

onUpdateSearch = (term) => {
  this.setState({term});
}


// toggleClass = (element) => {

//   let elements = element.parentElement.children;
//   for(let i = 0; i < elements.length; i++) {
//     elements[i].className = 'btn btn-outline-light';
//   }

//   element.className = 'btn btn-light'
// }

// onFilter = (visibleData,e) => {

// if(e) {
  
//   this.toggleClass(e.target);

//     if(e.target.getAttribute('data-attr') === 'salary') {
//       this.setState(({salaryToggleFilter})=> ({
//         salaryToggleFilter:visibleData.filter(item => +item.salary > 1000)
//       }))
//     } else if(e.target.getAttribute('data-attr') === 'rise') {
//       this.setState(({salaryToggleFilter})=> ({
//         salaryToggleFilter:visibleData.filter(item => item.rise == true)
//       }))
//     } else if(e.target.getAttribute('data-attr') === 'allEmpl') {
//       this.setState(({salaryToggleFilter})=> ({
//         salaryToggleFilter:visibleData
//       }))
//     }
//   } 
// }

// onUpdateFilter = (visibleData) => {
//   if(this.state.salaryToggleFilter.length > 0) {
//     return this.state.salaryToggleFilter;
//   } 

//   return visibleData;
// }



// /***  */

filterPost = (data, filter) => {
  switch(filter) {
    case 'rise':
    return data.filter(item => item.rise);

    case 'salaryMore1k':
      return data.filter(item => +item.salary > 1000);

      default :
      return data;
  }
}

onFilterSelect = (filter) => {

  this.setState({filter});
}



  render() {
    const {data, term} = this.state;

    const visibleData = this.filterPost(this.searchEmp(data, term), this.state.filter);

    // const visibleData = this.searchEmp(data, term);
    // const visibleFilterData = this.onUpdateFilter(visibleData);
    return (
      <div className="app">
          <AppInfo 
          qualityEmployees={data.length}
          qualityIncrease={data.filter(item => item.increase).length}
          />
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              {/* <AppFilter onFilter={this.onFilter} visibleData={visibleData}/> */}
              <AppFilter onFilterSelect={this.onFilterSelect} filter={this.state.filter}/>
          </div>
          
          <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAddItem={this.addItem}/>
      </div>
    );
  }

}

export default App;

