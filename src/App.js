import React, { useState } from "react";
import TodoList from "./components/TodoList";
import EventCalendar from "./components/EventCalendar";
import Joke from "./components/Joke";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    const [activeComponent, setActiveComponent] = useState("calendar");

    const renderComponent = () => {
        switch (activeComponent) {
            case "calendar":
                return <EventCalendar />;
            case "todolist":
                return <TodoList />;
            default:
                return <EventCalendar />;
        }
    };

    return (
        <div className="app-container">
            {/* 笑話功能置頂 */}
            <header>
                <h1>Joke Generator</h1>
                <Joke />
            </header>

            {/* 功能切換按鈕 */}
            <nav className="navigation">
                <button
                    onClick={() => setActiveComponent("calendar")}
                    className={activeComponent === "calendar" ? "active" : ""}
                >
                    Calendar
                </button>
                <button
                    onClick={() => setActiveComponent("todolist")}
                    className={activeComponent === "todolist" ? "active" : ""}
                >
                    Todo List
                </button>
            </nav>

            {/* 動態渲染 Calendar 或 Todo List */}
            <main>{renderComponent()}</main>
        </div>
    );
}

export default App;
