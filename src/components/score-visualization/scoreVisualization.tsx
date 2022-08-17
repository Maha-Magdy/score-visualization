import React from "react";
import WeightUnit from "./weight-unit/weightUnit";
import styles from './scoreVisualization.module.css';

function ScoreVisualization({
    name,
    bmiScore,
}: {
    name: string;
    bmiScore: number;
}) {
    return (
        <div>
            <p className={styles.name}>{name}'s BMI is</p>
            <p className={styles.bmiScore}>{bmiScore}</p>
            <div className={styles.barContainer}>
                <WeightUnit type="Underweight" active={bmiScore < 30 ? true : false} bmiScore={bmiScore} />
                <WeightUnit type="Normal" active={bmiScore >= 30 && bmiScore <= 90 ? true : false} bmiScore={bmiScore} />
                <WeightUnit type="Overweight" active={bmiScore > 90 ? true : false} bmiScore={bmiScore} />
            </div>
        </div>
    );
}

export default ScoreVisualization;
