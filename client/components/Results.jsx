import React, { Component, useState, useEffect } from 'react';

const Results = props => {
  
  
  return (
    <div>

      <div id='wpmAndScoreContainer'>

        <div id='finishedWPM'>
          <p id="finishedWPMnumber">
            {/* WPM upon completion */}
            120
          </p>
        </div>

        <div id='highScore'>
          <p id='highScoreNumber'>
            {/* HIGH SCORE */}
          </p>
        </div>

      </div>

      <div id='explanation'>
        <p id='codeExplanation'>
          {/* What the code that you typed does */}
          The code that you typed didnt do anything.
          Congratulations.
          You played yourself.
        </p>
      </div>

    </div>
  )
}




export default Results;