import React from "react"
import axios from "axios";
import { useState, useEffect} from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import { autobid } from '../../portfolio'
import './Autobidder.css'


const Autobidder = () => {
  const { title, description, subhead, socidal } = autobid

  const [imageProcessing, setImageProcessing] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const [processedImages, setProcessedImages] = useState(null)

  return (
    <div>

    <div className='about center'>
      <h1> {title} </h1>
      <h2 className='about__role'>{subhead} </h2>
      <p className='about__desc'>{description && description}</p>
      <a href="https://github.com/tmb5cg/Fifa22-Autobidder">Click here for repository</a>
    </div>

    <div className="about center">
      <h2>Tmb5cg's FIFA 22 Autobidder Instructions</h2>
      <br />
      <p>A completed "cycle" takes around 20 minutes and consists of 4 steps:</p>
      <br />
      <ol>
        <li>parsing Futbin for player prices</li>
        <li>bidding on the Transfer Market,</li>
        <li>handling the Transfer List (clearing sold, relisting expired),</li>
        <li>handling the Watch List (clearing expired auctions, listing won players)</li>
      </ol>

      <br />

      <p>The number of cycles is determined by <strong>num cycles</strong>, with a <strong>sleep time</strong> in minutes between each full cycle (completing steps 1 through 4) as a precaution to avoid a softban</p>

      <br />
      <ol>
        <li>Parsing Futbin for player prices
        <ul>
          <li>Bot searches using input Futbin URL on line 111 in autobidder.py which can be updated while existing bot thread is closed (thread is closed if GUI is grey, and not green - no need to re-login to change your setup)</li>
          <li>Player data and cards are stored to player_list.txt </li>
        </ul>
        </li>
      </ol>
    </div>

    </div>

  )
}

export default Autobidder
