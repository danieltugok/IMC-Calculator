import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const handleCalculeButton = () => {
    if(heightField && weightField){
      const imc = weightField / (heightField * heightField)
      alert(imc)
    } else alert("Digite todos os campos.")
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule your IMC</h1>
        <p>IMC e a sigla qpara indice de massa coporea, parametro adotado pela XXX...</p>
        
        <input
          type="number"
          placeholder="Digite a sua altura. Ex: 1.5 (Em metros)"
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
        />

        <input
          type="number"
          placeholder="Digite o seu peso. Ex: 75.3 (Em Kg)"
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
        />

        <button onClick={handleCalculeButton}>Calcular</button>

        </div>
      <div className={styles.rightSide}>
        right
        </div>

      </div>

    </div>
  )

}

export default App;