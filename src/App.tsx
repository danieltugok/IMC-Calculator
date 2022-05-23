import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';



import { levels, calculateImc, Level} from './helpers/imc'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculeButton = () => {
    if(heightField && weightField) setToShow(calculateImc(heightField, weightField)); 
    else alert("Digite todos os campos.")
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={120} />
        </div>
      </header>
      <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calculate Your BMI</h1>
        <p>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use the tool below to compute yours.</p>
        
        <input
          type="number"
          placeholder="Input your height. e.g.: 1.5 (In meters)"
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
        />

        <input
          type="number"
          placeholder="Input your weight. e.g.: 75.3 (In Kg)"
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
        />

        <button onClick={handleCalculeButton} disabled={toShow ? true : false}>Calculate</button>

        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}

            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>

      </div>

    </div>
  )

}

export default App;