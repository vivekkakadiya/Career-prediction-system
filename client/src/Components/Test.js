import "./Test.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import cors from "cors";
export default function Main() {
  // let history = useHistory();
  // const handleSubmit = async (e) =>{
  //     history.push("/signin");
  //     console.log(history);
  const [pos, setpos] = useState("");
  const [pa, setpa] = useState("");
  const [pc, setpc] = useState("");
  const [pse, setpse] = useState("");
  const [pcn, setpcn] = useState("");
  const [pes, setpes] = useState("");
  const [pca, setpca] = useState("");
  const [pm, setpm] = useState("");
  const [pcm, setpcm] = useState("");
  const [nhr, setnhr] = useState("");
  const [lq, setlq] = useState("");
  const [cs, setcs] = useState("");
  const [ps, setps] = useState("");
  const [lh, setlh] = useState("");
  const [slc, setslc] = useState("");
  const [certi, setcerti] = useState("");
  const [tt, settt] = useState("");
  const [rw, setrw] = useState("");
  const [mc, setmc] = useState("");
  const [is, setis] = useState("");
  const [ic, setic] = useState("");
  const [toc, settoc] = useState("");
  const [soe, setsoe] = useState("");
  const [ig, setig] = useState("");
  const [ib, setib] = useState("");
  const [b, setb] = useState("");
  const [mt, setmt] = useState("");
  const [wt, setwt] = useState("");
  const [wit, setwit] = useState();
  const [int, setint] = useState();
  
  let handleSubmit = async (e) => {
    console.log(rw);
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/form", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          1: pos,
          2: pa,
          3: pc,
          4: pse,
          5: pcn,
          6: pes,
          7: pca,
          8: pm,
          9: pcm,
          10: nhr,
          11: lq,
          12: cs,
          13: ps,
          14: lh,
          15: slc,
          16: certi,
          17: tt,
          18: rw,
          19: mc,
          20: is,
          21: ic,
          22: toc,
          23: soe,
          24: ig,
          25: ib,
          26: b,
          27: mt,
          28: wt,
          29: wit,
          30: int,
        }),
      });
      console.log(rw);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="main" style={{ height: "100vh" }}>
      <div className="nav">
        <div className="nav--upper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>
        </div>

        <div className="nav--lower">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
      </div>

      <div className="content">
        <div className="name">Career Prediction Test</div>

        <form
          action="http://localhost:8080/api/form"
          id="testForm"
          onSubmit={handleSubmit}
          //"window.location.href = 'localhost:3000/signin';"
        >
          <div className="testForm">
            percentage in Operating Systems <br />
            <input
              type="number"
              className="in"
              value={pos}
              onChange={(e) => setpos(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Algorithm <br />
            <input
              type="number"
              className="in"
              value={pa}
              onChange={(e) => setpa(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Programming Concepts <br />
            <input
              type="number"
              className="in"
              value={pc}
              onChange={(e) => setpc(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Software Engineering <br />
            <input
              type="number"
              className="in"
              value={pse}
              onChange={(e) => setpse(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Computer Networks <br />
            <input
              type="number"
              className="in"
              min="0"
              max="100"
              value={pcn}
              onChange={(e) => setpcn(e.target.value)}
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Electronics Subjects <br />
            <input
              type="number"
              className="in"
              value={pes}
              onChange={(e) => setpes(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Computer Architecture <br />
            <input
              type="number"
              className="in"
              value={pca}
              onChange={(e) => setpca(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Mathematics <br />
            <input
              type="number"
              className="in"
              value={pm}
              onChange={(e) => setpm(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Enter Percentage in Communication skills <br />
            <input
              type="number"
              className="in"
              value={pcm}
              onChange={(e) => setpcm(e.target.value)}
              min="0"
              max="100"
              required
            />{" "}
            <br /> <br />
            Hours working per day <br />
            <input
              type="number"
              className="in"
              value={nhr}
              onChange={(e) => setnhr(e.target.value)}
              min="0"
              max="24"
              required
            />{" "}
            <br /> <br />
            Logical quotient rating hackathons <br />
            <input
              type="number"
              className="in"
              min="0"
              max=""
              required
              value={lq}
              onChange={(e) => setlq(e.target.value)}
            />{" "}
            <br /> <br />
            coding skills rating <br />
            <input
              type="number"
              className="in"
              value={cs}
              onChange={(e) => setcs(e.target.value)}
              min="0"
              max="10"
              required
            />{" "}
            <br /> <br />
            public speaking points <br />
            <input
              type="number"
              className="in"
              value={ps}
              onChange={(e) => setps(e.target.value)}
              min="0"
              max="10"
              required
            />{" "}
            <br /> <br />
            can work long time before system? <br />
            <input
              type="radio"
              name="time"
              value="yes"
              onChange={(e) => setlh(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="time"
              value="no"
              onChange={(e) => setlh(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
            self-learning capability? <br />
            <input
              type="radio"
              name="Capacity"
              value="yes"
              onChange={(e) => setslc(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="Capacity"
              value="yes"
              onChange={(e) => setslc(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
            certifications <br />
            <select
              className="dropdown"
              required
              onChange={(e) => setcerti(e.target.value)}
            >
              <option value="shell programming">shell programming</option>
              <option value="machine learning">machine learning</option>
              <option value="app development">app development</option>
              <option value="python">python</option>
              <option value="r programming">r programming</option>
              <option value="information security">information security</option>
              <option value="hadoop">hadoop</option>
              <option value="distro making">distro making</option>
              <option value="full stack<">full stack</option>
            </select>{" "}
            <br /> <br />
            talent tests taken? <br />
            <input
              type="radio"
              name="talent"
              className="radio2"
              value="yes"
              onChange={(e) => settt(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="talent"
              className="radio2"
              value="yes"
              onChange={(e) => settt(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
            reading and writing skills <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setrw(e.target.value)}
            >
              <option value="excellent">excellent</option>
              <option value="poor">poor</option>
              <option value="medium">medium</option>
            </select>{" "}
            <br /> <br />
            memory capability score <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setmc(e.target.value)}
            >
              <option value="excellent">excellent</option>
              <option value="poor">poor</option>
              <option value="medium">medium</option>
            </select>{" "}
            <br /> <br />
            Interested subjects <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setis(e.target.value)}
            >
              <option value="cloud computing">cloud computing</option>
              <option value="networks">networks</option>
              <option value="hacking">hacking</option>
              <option value="Computer Architecture">Computer Architecture</option>
              <option value="programming">programming</option>
              <option value="parallel computing">parallel computing</option>
              <option value="IOT">IOT</option>
              <option value="data engineering">data engineering</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Management">Management</option>
            </select>{" "}
            <br /> <br />
            interested career area <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setic(e.target.value)}
            >
              <option value="system developer">system developer</option>
              <option value="Business process analyst">Business process analyst</option>
              <option value="developer">developer</option>
              <option value="testing">testing</option>
              <option value="security">security</option>
              <option value="cloud computing">cloud computing</option>
            </select>{" "}
            <br /> <br />
            Type of company want to settle in? <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => settoc(e.target.value)}
            >
              <option value="Web Services">Web Services</option>
              <option value="SaaS services">SaaS services</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Testing and Maintainance Services">Testing and Maintainance Services</option>
              <option value="product development">product development</option>
              <option value="BPA">BPA</option>
              <option value="Service Based">Service Based</option>
              <option value="Product Based">Product Based</option>
              <option value="Cloud Services">Cloud Services</option>
              <option value="Finance">Finance</option>
            </select>{" "}
            <br /> <br />
            Taken inputs from seniors or elders <br />
            <input
              type="radio"
              name="iws"
              className="radio2"
              value="yes"
              onChange={(e) => setsoe(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="iws"
              className="radio2"
              value="no"
              onChange={(e) => setsoe(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
            interested in games <br />
            <input
              type="radio"
              name="iig"
              className="radio2"
              value="yes"
              onChange={(e) => setig(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="iig"
              className="radio2"
              value="no"
              onChange={(e) => setig(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
            Interested Type of Books <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setib(e.target.value)}
            >
              <option value="Prayer books">Prayer books</option>
              <option value="Childrens">Childrens</option>
              <option value="Travel">Travel</option>
              <option value="Romance">Romance</option>
              <option value="Cookbooks">Cookbooks</option>
              <option value="Self help">Self help</option>
              <option value="Drama">Drama</option>
              <option value="Math">Math</option>
              <option value="Religion-Spirituality">Religion-Spirituality</option>
              <option value="Anthology">Anthology</option>
              <option value="Trilogy">Trilogy</option>
              <option value="Autobigraphics">Autobigraphics</option>
              <option value="Mystery">Mystery</option>
              <option value="Diaries">Diaries</option>
              <option value="Journals">Journals</option>
              <option value="History">History</option>
              <option value="Art">Art</option>
              <option value="Dictionaries">Dictionaries</option>
              <option value="Horror">Horror</option>
              <option value="Encyclopedias">Encyclopedias</option>
              <option value="Action and Adventure">Action and Adventure</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Comics">Comics</option>
              <option value="Science fiction">Science fiction</option>
              <option value="Series">Series </option>
              <option value="Guide">Guide </option>
              <option value="Biographies">Biographies</option>
              <option value="Health">Health</option>
              <option value="Satire">Satire</option>
              <option value="Science">Science</option>
              <option value="Poetry">Poetry</option>
            </select>{" "}
            <br /> <br />
            Gentle or Tough behaviour? <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setb(e.target.value)}
            >
              <option value="stubborn">stubborn</option>
              <option value="Gentle">Gentle</option>
            </select>{" "}
            <br /> <br />
            Management or Technical <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setmt(e.target.value)}
            >
              <option value="Management">Management</option>
              <option value="Technical">Technical</option>
            </select>{" "}
            <br /> <br />
            Hard/Smart worker <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setwt(e.target.value)}
            >
              <option value="Hard worker">Hard worker</option>
              <option value="smart worker">smart worker</option>
            </select>{" "}
            <br /> <br />
            worked in teams ever? <br />
            <input
              type="radio"
              name="workInTeam"
              value="yes"
              onChange={(e) => setwit(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="workInTeam"
              values="no"
              onChange={(e) => setwit(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
            Introvert <br />
            <input
              type="radio"
              name="introvert"
              values="yes"
              onChange={(e) => setint(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="introvert"
              values="no"
              onChange={(e) => setint(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />
          </div>

          {/* <a href="/signin"> */}
            <button >Submit</button>
            {/* <input type="submit" value="Submit" /> */}
          {/* </a> */}
        </form>
      </div>
    </div>
  );
}
