import { useState } from "react";
import Calendar from "react-calendar";

 function App() {
    const [calendarValue, onChangeCalendar] = useState(new Date());
    return <div>
       <Calendar 
           onChange={onChangeCalendar} 
           value={calendarValue}  
       />
    </div>
}

export default App;