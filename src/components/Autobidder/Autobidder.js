import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import { autobid } from "../../portfolio";
import "./Autobidder.css";

const Autobidder = () => {
  const { title, description, subhead, socidal } = autobid;

  const [imageProcessing, setImageProcessing] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [processedImages, setProcessedImages] = useState(null);

  return (
    <div>
      <div className="about center">
        <h1> {title} </h1>
        <h2 className="about__role">{subhead} </h2>
        <p className="about__desc">{description && description}</p>
        <br></br>
        <a
          className="btn-upload"
          href="https://github.com/tmb5cg/Fifa22-Autobidder"
        >
          GitHub Repository
        </a>
        <a className="btn-upload" href="copay-castle.0y@icloud.com">
          Licensing and pricing contact (pro)
        </a>
        <a className="btn-upload" href="https://discord.gg/wmssAnqC">
          Discord Community (public)
        </a>
      </div>

      <div className="about left">Last updated: 10/18/22 13:14:22</div>

      <br />
      <br />

      <div className="about tester">
        <h2>Documentation</h2>
        <br />
        <p>
          A completed "cycle" takes around 20 minutes and consists of 4 steps:
        </p>
        <br />
        <ol>
          <li>parsing Futbin for player prices</li>
          <li>bidding on the Transfer Market,</li>
          <li>
            handling the Transfer List (clearing sold, relisting expired),
          </li>
          <li>
            handling the Watch List (clearing expired auctions, listing won
            players)
          </li>
        </ol>

        <br />

        <p>
          The number of cycles is determined by <strong>num cycles</strong>,
          with a <strong>sleep time</strong> in minutes between each full cycle
          (completing steps 1 through 4) as a precaution to avoid a softban
        </p>

        <br />
        <ol>
          <li>
            Parsing Futbin for player prices
            <ul className="entry">
              <li>
                Bot searches using input Futbin URL on line 111 in autobidder.py
                which can be updated while existing bot thread is closed (thread
                is closed if GUI is grey, and not green - no need to re-login to
                change your setup)
              </li>
              <li>Player data and cards are stored to player_list.txt </li>
            </ul>
          </li>

          <li>
            Bidding
            <ul className="entry">
              <li>
                Bot attempts to make 50 bids (the maximum watchlist size) in up
                to 30 distinct "searches":
                <ul className="entry">
                  <li>clicks the search button</li>
                  <li>parses all cards on page</li>
                  <li>
                    bids on those which if Won should sell for a post-tax profit
                    greater than or equal to the <strong>margin</strong>
                  </li>
                  <li>clicks next page</li>
                  <li>
                    Repeats above steps until card expiring at or above{" "}
                    <strong>expiration_cutoff_mins</strong> is detected
                  </li>
                </ul>
              </li>

              <li>
                The bot will return to the Search the Transfer Market page, and
                make a new search, and repeat the above until watchlist is full
                or 30 request limit is hit (as safety precaution, bot in theory
                could make infinite searches as result of user error ie mismatch
                between input search params + futbin URL, or extreme market
                caching)
              </li>
              <li>
                Recommended <strong>expiration_cutoff_mins</strong> is 3{" "}
              </li>
            </ul>
          </li>

          <li>
            Handling Transfer List
            <ul className="entry">
              <li>Sold players are cleared and logged to logs.csv </li>
              <li>
                Expired players are relisted based on{" "}
                <strong>undercut_market_on_relist</strong>:
                <ul className="entry">
                  <li>0 = relisted for same failed price</li>
                  <li>1 = relisted for -50 or -100 (if &gt;1k) failed price</li>
                  <li>
                    2 = relisted for -100 or -200 (if &gt;1k) failed price etc.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            Handling Watch List
            <ul className="entry">
              <li>
                Bot waits for all auctions to expire (if applicable). This is
                where <strong>expiration_cutoff_mins</strong> during your
                bidding can bite you - if is high, for example 10 minutes, you
                might have to waste 5 minutes waiting for the last player expire
                (assuming it took 5 minutes to finish handling the transfer
                list), ie you are waiting 5 minutes to make just 100 coins
              </li>
              <li>Expired players (lost) are cleared and logged to logs.csv</li>
              <li>
                Won players are listed based on{" "}
                <strong>undercut_market_on_list</strong>:
                <ul className="entry">
                  <li>0 = listed for market price via player_list.txt</li>
                  <li>1 = listed for -50 or -100 (if &gt;1k) market price</li>
                  <li>
                    2 = listed for -100 or -200 (if &gt;1k) market price etc.
                  </li>
                </ul>
              </li>
              <li>
                If for some reason player is not on player_list.txt (happens if
                you get backed up with too many players selling), bot will flag
                this and auto list for its bought price
              </li>
              <li>
                Bot then sleeps x minutes set in <strong>sleep_time</strong> and
                repeats all the above n <strong>num_cycles</strong>
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Autobidder;
