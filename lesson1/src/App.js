import './App.css';


const Title = (props) => {
    const {title, age } = props
    return (
        <h1>{title}</h1>
    )
}
const Header = () => {
    return (
        <Title title = {'Header'} age = {18}/>
    )
}
const Footer = () => {
    return (
        <Title title = {'Footer'} age={19}/>
    )
}

function App() {
    const sum = (a, b) => {
        return a + b
    }
    console.log(sum(5,6))

    return (
        <>
            <Header/>
            <div className="App">
                <h1>Hello World</h1>
            </div>
            <Footer/>
        </>
    );
}

export default App;
