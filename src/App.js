import * as React from "react";
import { buckets } from "./data/data";
import { useState } from "react";
import InterviewQuestionForm from "./components/InterviewQuestionForm";
import DataProgressionTable from "./components/DataProgressionTable";
import IntroGreeting from "./components/IntroGreeting";

function App() {
  const [tableData, setTableData] = useState(buckets);

  return (
    <div>
      <IntroGreeting />
      <br />
      <InterviewQuestionForm
        tableData={tableData}
        setTableData={setTableData}
      />
      <DataProgressionTable tableData={tableData} />
    </div>
  );
}

export default App;

// Lets use material ui, work on the structure and design of this app -> ok thank you
