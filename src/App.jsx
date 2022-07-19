import * as C from "./styles";
import { useEffect, useState } from "react";
import CardItem from "./components/Card/CardItem";
import Api from "./Api/Api";

const App = () => {
  const [advice, setAdvice] = useState([]);
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    handleRequisitionAdvice ();
  }, [])

  const handleRequisitionAdvice  = async () => {
    const json = await Api.getRandomAdvice();
    return handleTranslator(json.slip)
  }

  const handleTranslator = async (data) => {
    const json = await Api.getAndTranslate(data);
    setShowCard(true)
    return setAdvice(json)
  }

  return (
    <C.Container>
      {showCard &&
          <CardItem data={advice} onclick={handleRequisitionAdvice}/>
      }
    </C.Container>
  )
}
export default App
