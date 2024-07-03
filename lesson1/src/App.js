import './App.css';


const Title = () => {
    return (
        <h1>Title</h1>
    )
}
const Header = () => {
    return (
        <Title/>
    )
}
const Footer = () => {
    return (
        <Title/>
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
