import './App.css';


const Header = () => {
    return (
        <h1>header</h1>
    )
}
const Footer = () => {
    return (
        <h1>footer</h1>
    )
}

function App() {
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
