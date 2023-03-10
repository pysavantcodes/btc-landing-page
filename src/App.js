import React, { useState } from "react";
import { question, gridData, right } from "./temp-data/discoverGrid";
import { startGrid } from "./temp-data/startGrid";
import Img from "./temp-data/img.webp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [drop, setDrop] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [sending, setSending] = useState(false);
  window.onload = () => {
    function googleTranslateElementInit() {
      const google = window.google;
      new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    }

    googleTranslateElementInit();
  };

  const postData = async () => {
    if (firstName === "" || lastName === "" || mail === "" || number === "") {
      alert("Please Insert all fields!");
    } else {
      setSending(true);
      const form = new FormData();
      form.append("firstname", firstName);
      form.append("lastname", lastName);
      form.append("mail", mail);
      form.append("number", number);
      form.append("command", "insertdata");

      let headersList = {
        Accept: "*/*",
      };

      let response = await fetch(
        "https://web9072.web07.bero-webspace.de/savedat/storage.php",
        {
          method: "POST",
          body: form,
          mode: "no-cors",
          headers: headersList,
        }
      );

      let data = await response.text();
      console.log(data);
      toast.success("Subscribed", { theme: "dark" });
      setFirstName("");
      setLastName("");
      setMail("");
      setNumber("");
      setSending(false);
    }
  };
  return (
    <div className="body">
      <header>
        <nav>
          <div
            style={{
              display: "flex",
              alignItms: "center",
              justifyContent: "center",
              columnGap: "20px",
            }}
          >
           
            <h3>
              CryptoAuto<span style={{ color: "rgb(251,175,65)" }}>Trader</span>
            </h3>
          </div>
          <div id="google_translate_element"></div>
          <div onClick={() => setDrop(!drop)} className="drawer">
            <p>???</p>
          </div>

          <ul className="routes">
            <li>
              <a href="#form">About</a>
            </li>
            <li>
              <a href="#form">Contact</a>
            </li>
            <li>
              <a href="#form">Login</a>
            </li>
          </ul>
        </nav>
        {drop && (
          <div className="drop">
            <ul>
              <li>
                <a href="#form">About</a>
              </li>
              <li>
                <a href="#form">Contact</a>
              </li>
              <li>
                <a href="#form">Login</a>
              </li>
            </ul>
          </div>
        )}
        <section className="hero">
          <h1>Crypto Auto Trader</h1>
          <h3>Welcome to the Official Crypto Auto Trader Platform</h3>
          <p>
            Crypto Auto Trader can help you trade on Bitcoin by making it as
            accessible and streamlined as possible. It???s suitable for beginners
            and expert traders alike, and it???s available to you right now!
          </p>
          <div className="img-form">
            <div className="img">
              <img src="https://iili.io/HALzR4a.png" alt="" />
            </div>
            <div id="form" className="form">
              <h3>LEARN MORE ABOUT BITCOIN</h3>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />
              <br />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
              <br />
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="tel"
                placeholder="+245-3556-34566"
              />
              <br />
              <button
                disabled={sending}
                onClick={() => postData()}
                className="btn"
              >
                Learn More
              </button>
              <p style={{ color: "black", fontSize: "11px", padding: "8px 0" }}>
                *By entering your personal details here and clicking the LEARN
                MORE button you agree and accept the Website Privacy Policy and
                Terms & Conditions. *Your personal information may be shared
                with third parties providing trading services as provided in the
                Website privacy policy.
              </p>
            </div>
          </div>
        </section>
      </header>
      <section className="discover">
        <h1>Discover Crypto Auto Trader</h1>
        <div className="txt-img">
          <p>
            Have you wanted to invest in Bitcoin and were not sure how? Most
            people think they???ve got to have extensive knowledge of the market
            fluctuations, analyze them for hours at a time, and spend the full
            day dealing with numbers. While some traders like this just don???t
            have the time. Crypto Auto Trader streamlines the process, which
            doesn???t mean you needn???t do anything. On the contrary, the more you
            read, analyze, and learn, the better you might understand the
            market. But with Crypto Auto Trader, you can start trading slowly at
            your own pace, and learn as you go, all the while getting advice
            from your account manager.
          </p>
          <div className="img">
            <img src="https://bitcoinsystem.app/assets/bg-1.webp" alt="" />
          </div>
        </div>
        <div className="discover-grid">
          {gridData.map((item) => {
            return (
              <div className="gridItem" key={item.head}>
                <h3>{item.head}</h3>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#form">
            <button className="btn">Learn More</button>
          </a>
        </div>
      </section>
      <div className="outer">
        <section className="start">
          <h1>How Do You Start Using Crypto Auto Trader?</h1>
          <h3>
            The process of joining Crypto Auto Trader is fairly quick. In fact,
            anyone can do it with no help at all.
          </h3>
          <div className="startGrid">
            {startGrid.map((item) => {
              return (
                <div className="startItem" key={item.data}>
                  <img src={item.img} alt="" />
                  <h3>{item.head}</h3>
                  <p>{item.data}</p>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="#form">
              <button className="btn">Discover Crypto Auto Trader</button>
            </a>
          </div>
        </section>
      </div>
      <section className="why">
        <h1>Why Crypto Auto Trader?</h1>
        <div className="txt-img">
          <p>
            Due to the volatility of the Bitcoin market, traders devise a
            variety of strategies. To facilitate matters, many Bitcoin traders
            use trading platforms such as Crypto Auto Trader.
          </p>
          <div className="img">
            <img src="https://bitcoinsystem.app/assets/list-1.webp" alt="" />
          </div>
        </div>
        <div className="offer">
          <div className="img">
            <img src="https://bitcoinsystem.app/assets/list-2.webp" alt="" />
          </div>
          <div className="txt">
            <h1>What can Crypto Auto Trader offer you?</h1>
            <p>
              <b>1. Suitable for all traders</b> <br /> You don't need any prior
              trading experience to get started with Crypto Auto Trader.
              Regardless of whether you're new to trading or an experienced
              trader, the platform can streamline your trading. <br /> <br />
              <b>2. User friendly Crypto Auto Trader</b> <br />
              provides an easy-to-use user interface (UI) and market analytics.
              With the help of your broker, you can also customize your trading
              strategy and easily set profit and loss limits. <br />
              <br />
              <b>3. Your partnered broker</b> <br />
              Upon successful registration, your account manager will be ready
              to assist you with your preferences and limitations, tweak your
              trading strategy, and send you prompts with viable trading
              options. <br />
              <br /> <b>4. A range of features</b>
              <br />
              &#x2022; You can create a customized trading strategy with the
              help of your partnered broker <br />
              &#x2022; You may share your preferences with your account manager,
              so he / she can send you notifications when viable trading
              opportunities arise <br />
              &#x2022; If you???re still unsure about your trading skills, start
              with the ???Demo??? feature to gain more confidence <br />
              <br /> <b>5. Compatible with all devices</b>
              <br /> Crypto Auto Trader is web-based and therefore compatible
              with all devices, including your desktop, laptop, tablet, or
              smartphone. That means you have complete control over your account
              and may access it at any time and from any location.
            </p>
          </div>
        </div>
        <div className="opportunity">
          <h1>
            Crypto Auto Trader allows you to trade 24/7, so you never miss an
            opportunity.
          </h1>
          <div className="img">
            <img src="https://bitcoinsystem.app/assets/list-3.webp" alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#form">
            <button className="btn">Learn More</button>
          </a>
        </div>
      </section>
      <div className="outer">
        <section className="faqs">
          <h1>FAQs</h1>
          <h3>
            Still here? That???s great, it shows that you might be really
            interested in the opportunity Crypto Auto Trader presents. Even so,
            you haven???t signed up, so you probably have more questions. It???s
            normal to wonder about online trading, cryptocurrency, and the
            proprietary platform of Crypto Auto Trader. Take a glance at what
            others have asked and learn what you need to feel comfortable using
            the platform. You???re more than welcome to ask more questions, maybe
            they???ll be added to the list.
          </h3>
          <div className="faqGrid">
            <div className="left">
              {question.map((item, index) => {
                return (
                  <div key={item.head} className={`faqItem item${index + 1}`}>
                    <h3>{item.head}</h3>
                    <p>{item.data}</p>
                  </div>
                );
              })}
            </div>
            <div className="right">
              {right.map((item, index) => {
                return (
                  <div key={item.head} className={`faqItem item${index + 1}`}>
                    <h3>{item.head}</h3>
                    <p>{item.data}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <div className="final">
        <h1>Final Word</h1>
        <div className="txt-img">
          <p>
            All this is quite a lot to take in, but transparency is important,
            and you should have all the information to feel that you???re ready to
            join and start trading Bitcoin. However, take all the time you
            require to feel confident that Crypto Auto Trader is the right
            trading platform for you. Bitcoin isn???t going away; the first crypto
            is still very popular, and so is the opportunity to trade. Crypto
            Auto Trader makes it possible to trade online even if you don???t have
            much experience. And if you do have years of trading under your
            belt, Crypto Auto Trader still has a lot in store to streamline your
            trading process.
          </p>
          <div className="img">
            <img src={Img} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#form">
            <button className="btn">Discover More</button>
          </a>
        </div>
      </div>
      <div className="footer">
        <footer>
          <p style={{ padding: "10px 0" }}>Crypto Auto Trader</p>
          <p>
            <b>Important Risk Note:</b> <br /> Trading can generate notable
            benefits; however, it also involves a risk of partial/full funds
            loss and should be considered by initial investors. Around 70
            percent of the investors will lose money. <br />
            <br /> #Crypto Auto Trader and any other commercial names used on
            the site are for commercial purposes only, and do not refer to any
            specific company nor specific services providers. <br />
            <br /> The video is for commercial presentation and illustration
            purposes only, and all participants are actors. <br />
            <br /> Carefully read the terms & conditions and disclaimer page of
            the third-party investor platform before investing. users must be
            cognisant of their individual capital gain tax liability in their
            country of residence. It is against the law to solicit United States
            persons to buy and sell commodity options, even if they are called
            ???prediction' contracts unless they are listed for trading and traded
            on a CFTC-registered exchange or unless legally exempt. <br />{" "}
            <br /> The Financial Conduct Authority (???FCA???) has issued a policy
            statement PS20/10, which prohibits the sale, promotion, and
            distribution of CFD on Crypto assets. It is prohibiting the
            dissemination of marketing materials relating to distribution of
            CFDs and other financial products based on Cryptocurrencies and
            which are addressed to UK residents By leaving your personal details
            herein you consent and allow us to share your personal information
            with third parties providing trading services as provided in the
            privacy and terms of conditions. <br /> <br /> There are several
            trading options that the trader/user can use ??? by trading software,
            using human brokers, or by making own trades and it's the trader???s
            sole responsibility to choose and decide what is the right way for
            him/her to trade..
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
