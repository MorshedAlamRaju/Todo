class Header extends React.Component{
    render(){
        return <h1>Todo List manager</h1>
    }
}

class Activity extends React.Component{
    render(){
        return <li>Item</li>
    }
}

class ActivityList extends React.Component{
    render(){
         return <Activity/>
    }
}

const template = (
    <div>
        <Header/>
        <ActivityList/>
    </div>
)

const render = () => {
    const template = (
        <div>
            <Header/>
            <ActivityList/>
        </div>
    )    
    ReactDOM.render(template, document.querySelector("#app"));
}

render();
