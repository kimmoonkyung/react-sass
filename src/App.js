import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">BUTTON</Button>
                <Button>BUTTON</Button>
                <Button size="small">BUTTON</Button>
            </div>

            <div className="buttons">
                <Button color="pink" size="large">
                    BUTTON
                </Button>
                <Button color="pink">BUTTON</Button>
                <Button color="pink" size="small">
                    BUTTON
                </Button>
            </div>

            <div className="buttons">
                <Button color="gray" size="large">
                    BUTTON
                </Button>
                <Button color="gray">BUTTON</Button>
                <Button color="gray" size="small">
                    BUTTON
                </Button>
            </div>

            <div className="buttons">
                <Button size="large" outline={true}>
                    BUTTON
                </Button>
                <Button color="gray" outline={true}>
                    BUTTON
                </Button>
                <Button color="pink" size="small" outline={true}>
                    BUTTON
                </Button>
            </div>

            <div className="buttons">
                <Button size="large" fullWidth>
                    BUTTON
                </Button>
                <Button color="gray" size="large" fullWidth>
                    BUTTON
                </Button>
                <Button
                    color="pink"
                    size="large"
                    fullWidth
                    onClick={() => {
                        console.log('zf');
                    }}
                    onMouseMove={() => {
                        console.log('마우스 무비');
                    }}
                >
                    BUTTON
                </Button>
            </div>
        </div>
    );
}

export default App;
