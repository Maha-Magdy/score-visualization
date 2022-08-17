import React from 'react';
import styles from './weightUnit.module.css'

function WeightUnit({ type, active, bmiScore }: { type: string, active: boolean, bmiScore: number }) {
    const indexPosition = () => {
        if (bmiScore < 30) {
            return ((bmiScore / 30) * 100) < 10 ? 10 : ((bmiScore / 30) * 100);
        } else if (bmiScore >= 30 && bmiScore <= 90) {
            return ((bmiScore - 30) / 60) * 100;
        } else {
            return (((bmiScore - 90) / 30) * 100) > 90 ? 90 : (((bmiScore - 90) / 30) * 100);
        }
    };

    console.log(type, active, indexPosition());
    return (
        <div className={styles.unitContainer} data-type={type}>
            {active && <div className={styles.triangle} style={{ left: `calc(${indexPosition()}% - 15px)` }}></div>}
            <div className={styles.bar}>
                {active && <div className={styles.active}></div>}
            </div>
            <p>{type}</p>
        </div>

    );
}

export default WeightUnit;