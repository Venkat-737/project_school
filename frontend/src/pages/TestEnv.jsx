import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import Split from "split.js";
import axios from "axios";

export default function TestEnv() {
  const [code, setCode] = useState("// Some comment");
  const [results, setResults] = useState(null);

  useEffect(() => {
    Split(["#activity", "#description"], {
      sizes: [50, 50],
      direction: "horizontal",
      gutterSize: 5,
    });

    const problem = {
      testcases: [
        {
          input: "15",
          expected_output: "30",
        },
        {
          input: "16",
          expected_output: "31",
        },
      ],
      description: "Problem description here",
    };

    problem.testcases.forEach((testcase) => {
      console.log(testcase.input);
    });
  }, []);

  function handleEditorCode(value, event) {
    setCode(value);
  }

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/api/codes/", {
      code: code,
      testcases: problem.testcases,
    });

    const results = res.data.results;
    setResults(results);
  };

  return (
    <div className="flex">
      <div className="flex flex-col" id="activity">
        <div className="toolbar w-full h-[50px] bg-gray-400 flex items-center justify-end px-4 gap-x-3">
          <select
            name="language_id"
            id="language_id"
            className="w-[200px]"
            defaultValue={1002}
          >
            <option value="45" mode="UNKNOWN">
              Assembly (NASM 2.14.02)
            </option>
            <option value="46" mode="shell">
              Bash (5.0.0)
            </option>
            <option value="47" mode="UNKNOWN">
              Basic (FBC 1.07.1)
            </option>
            <option value="1011" mode="UNKNOWN">
              Bosque (latest)
            </option>
            <option value="75" mode="c">
              C (Clang 7.0.1)
            </option>
            <option value="1013" mode="c">
              C (Clang 9.0.1)
            </option>
            <option value="1001" mode="c">
              C (Clang 10.0.1)
            </option>
            <option value="48" mode="c">
              C (GCC 7.4.0)
            </option>
            <option value="49" mode="c">
              C (GCC 8.3.0)
            </option>
            <option value="50" mode="c">
              C (GCC 9.2.0)
            </option>
            <option value="51" mode="csharp">
              C# (Mono 6.6.0.161)
            </option>
            <option value="1022" mode="csharp">
              C# (Mono 6.10.0.104)
            </option>
            <option value="1021" mode="csharp">
              C# (.NET Core SDK 3.1.302)
            </option>
            <option value="1023" mode="csharp">
              C# Test (.NET Core SDK 3.1.302, NUnit 3.12.0)
            </option>
            <option value="76" mode="cpp">
              C++ (Clang 7.0.1)
            </option>
            <option value="1014" mode="cpp">
              C++ (Clang 9.0.1)
            </option>
            <option value="1002" mode="cpp">
              C++ (Clang 10.0.1)
            </option>
            <option value="52" mode="cpp">
              C++ (GCC 7.4.0)
            </option>
            <option value="53" mode="cpp">
              C++ (GCC 8.3.0)
            </option>
            <option value="54" mode="cpp">
              C++ (GCC 9.2.0)
            </option>
            <option value="1015" mode="cpp">
              C++ Test (Clang 10.0.1, Google Test 1.8.1)
            </option>
            <option value="1012" mode="cpp">
              C++ Test (GCC 8.4.0, Google Test 1.8.1)
            </option>
            <option value="1003" mode="c">
              C3 (latest)
            </option>
            <option value="86" mode="clojure">
              Clojure (1.10.1)
            </option>
            <option value="77" mode="UNKNOWN">
              COBOL (GnuCOBOL 2.2)
            </option>
            <option value="55" mode="UNKNOWN">
              Common Lisp (SBCL 2.0.0)
            </option>
            <option value="56" mode="UNKNOWN">
              D (DMD 2.089.1)
            </option>
            <option value="57" mode="UNKNOWN">
              Elixir (1.9.4)
            </option>
            <option value="58" mode="UNKNOWN">
              Erlang (OTP 22.2)
            </option>
            <option value="44" mode="plaintext">
              Executable
            </option>
            <option value="87" mode="fsharp">
              F# (.NET Core SDK 3.1.202)
            </option>
            <option value="1024" mode="fsharp">
              F# (.NET Core SDK 3.1.302)
            </option>
            <option value="59" mode="UNKNOWN">
              Fortran (GFortran 9.2.0)
            </option>
            <option value="60" mode="go">
              Go (1.13.5)
            </option>
            <option value="88" mode="UNKNOWN">
              Groovy (3.0.3)
            </option>
            <option value="61" mode="UNKNOWN">
              Haskell (GHC 8.8.1)
            </option>
            <option value="62" mode="java">
              Java (OpenJDK 13.0.1)
            </option>
            <option value="1004" mode="java">
              Java (OpenJDK 14.0.1)
            </option>
            <option value="1005" mode="java">
              Java Test (OpenJDK 14.0.1, JUnit Platform Console Standalone
              1.6.2)
            </option>
            <option value="63" mode="javascript">
              JavaScript (Node.js 12.14.0)
            </option>
            <option value="78" mode="kotlin">
              Kotlin (1.3.70)
            </option>
            <option value="64" mode="lua">
              Lua (5.3.5)
            </option>
            <option value="1006" mode="c">
              MPI (OpenRTE 3.1.3) with C (GCC 8.3.0)
            </option>
            <option value="1007" mode="cpp">
              MPI (OpenRTE 3.1.3) with C++ (GCC 8.3.0)
            </option>
            <option value="1008" mode="python">
              MPI (OpenRTE 3.1.3) with Python (3.7.3)
            </option>
            <option value="1009" mode="python">
              Nim (stable)
            </option>
            <option value="79" mode="objective-c">
              Objective-C (Clang 7.0.1)
            </option>
            <option value="65" mode="UNKNOWN">
              OCaml (4.09.0)
            </option>
            <option value="66" mode="UNKNOWN">
              Octave (5.1.0)
            </option>
            <option value="67" mode="pascal">
              Pascal (FPC 3.0.4)
            </option>
            <option value="85" mode="perl">
              Perl (5.28.1)
            </option>
            <option value="68" mode="php">
              PHP (7.4.1)
            </option>
            <option value="43" mode="plaintext">
              Plain Text
            </option>
            <option value="69" mode="UNKNOWN">
              Prolog (GNU Prolog 1.4.5)
            </option>
            <option value="70" mode="python">
              Python (2.7.17)
            </option>
            <option value="71" mode="python">
              Python (3.8.1)
            </option>
            <option value="1010" mode="python">
              Python for ML (3.7.3)
            </option>
            <option value="80" mode="r">
              R (4.0.0)
            </option>
            <option value="72" mode="ruby">
              Ruby (2.7.0)
            </option>
            <option value="73" mode="rust">
              Rust (1.40.0)
            </option>
            <option value="81" mode="UNKNOWN">
              Scala (2.13.2)
            </option>
            <option value="82" mode="sql">
              SQL (SQLite 3.27.2)
            </option>
            <option value="83" mode="swift">
              Swift (5.2.3)
            </option>
            <option value="74" mode="typescript">
              TypeScript (3.7.4)
            </option>

            <option value="84" mode="vb">
              Visual Basic.Net (vbnc 0.0.0.5943)
            </option>
          </select>
          <button className="submitbtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <Editor
          height="400px"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={handleEditorCode}
        />
        <div className="test-area w-full h-32 bg-blue-300">
          <h1>
            Memory consumed :{" "}
            {results != null ? results.memory : "Nothing here"}
          </h1>
          <h1>
            Status consumed :{" "}
            {results != null ? results.status.description : "Nothing here"}
          </h1>
        </div>
      </div>
      <div className="bg-blue-500" id="description">
        Test
      </div>
    </div>
  );
}
