import { useState} from "react";

const useDisplay = (inicial = false) => {
    const [display, setDisplay] = useState(inicial);
    const HandleDisplay = () => setDisplay(!display);
    return{
      display,
      HandleDisplay
    }
  }

  export default useDisplay