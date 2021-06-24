import AppLayout from './AppLayout'
import Context from './context'
const App = () => {
    return (
        <Context>
            <AppLayout/>
        </Context>
    );
}

export default App;