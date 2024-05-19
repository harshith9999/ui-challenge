import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { useParams } from "react-router-dom";
import RightHeader from "./RightHeader";
import ExecDataComp from "./ExecDataComp";

const dummyData = {
  id: 1,
  endpoints: [
    {
      url: "/quam.jpg",
      duration: 13984,
      status: "ERROR",
    },
    {
      url: "/dictumst/aliquam/augue.xml",
      duration: 13056,
      status: "FAILURE",
    },
    {
      url: "/justo/lacinia/eget/tincidunt.jsp",
      duration: 15039,
      status: "ERROR",
    },
    {
      url: "/ut/nunc/vestibulum/ante/ipsum.html",
      duration: 3610,
      status: "SUCCESS",
    },
    {
      url: "/ipsum/aliquam/non.xml",
      duration: 16661,
      status: "ERROR",
    },
    {
      url: "/pretium.jsp",
      duration: 11009,
      status: "FAILURE",
    },
    {
      url: "/ante/ipsum/primis/in/faucibus.jpg",
      duration: 3222,
      status: "FAILURE",
    },
    {
      url: "/lectus/in/est/risus/auctor/sed.html",
      duration: 28976,
      status: "ERROR",
    },
    {
      url: "/sit/amet/eros/suspendisse/accumsan.aspx",
      duration: 4487,
      status: "ERROR",
    },
    {
      url: "/mauris/enim/leo/rhoncus/sed.xml",
      duration: 20035,
      status: "FAILURE",
    },
    {
      url: "/vitae/mattis/nibh/ligula/nec.xml",
      duration: 5931,
      status: "SUCCESS",
    },
    {
      url: "/luctus.jsp",
      duration: 17093,
      status: "SUCCESS",
    },
    {
      url: "/urna/ut/tellus/nulla/ut.js",
      duration: 3179,
      status: "SUCCESS",
    },
    {
      url: "/neque/duis/bibendum.html",
      duration: 9181,
      status: "SUCCESS",
    },
    {
      url: "/et/tempus.json",
      duration: 12561,
      status: "ERROR",
    },
    {
      url: "/hac/habitasse/platea.jpg",
      duration: 5799,
      status: "SUCCESS",
    },
    {
      url: "/pellentesque/at/nulla/suspendisse/potenti/cras.json",
      duration: 24786,
      status: "SUCCESS",
    },
    {
      url: "/accumsan/tortor/quis/turpis/sed.png",
      duration: 2958,
      status: "FAILURE",
    },
    {
      url: "/habitasse/platea/dictumst.jpg",
      duration: 6261,
      status: "FAILURE",
    },
    {
      url: "/primis/in/faucibus/orci/luctus/et/ultrices.html",
      duration: 7022,
      status: "FAILURE",
    },
    {
      url: "/pede/libero/quis/orci/nullam.png",
      duration: 7393,
      status: "SUCCESS",
    },
    {
      url: "/dictumst/etiam/faucibus/cursus/urna/ut/tellus.json",
      duration: 20336,
      status: "ERROR",
    },
    {
      url: "/nibh/quisque/id.jsp",
      duration: 26206,
      status: "SUCCESS",
    },
    {
      url: "/a/feugiat/et/eros.js",
      duration: 4363,
      status: "SUCCESS",
    },
    {
      url: "/cras/mi/pede.js",
      duration: 7484,
      status: "ERROR",
    },
    {
      url: "/sapien/a/libero/nam/dui/proin/leo.json",
      duration: 23577,
      status: "FAILURE",
    },
  ],
  end_date: "2020-10-25T05:59:59Z",
  duration: 693902,
  job_name: "Tampflex",
  branch: "Breitenberg, D'Amore and Stracke",
  github_user: "mmaffy0",
  commit: "4f75cs1xr2",
  environment_url: "http://wisc.edu",
};
const dummyCardData = [
  {
    id: 1,
    name: "Lenee",
    start_date: "2020-12-30T22:03:26Z",
    duration: 345355,
    failed_tests: 0,
    succeed_tests: 40,
  },
  {
    id: 2,
    name: "Cornall",
    start_date: "2021-05-29T05:35:29Z",
    duration: 558574,
    failed_tests: 0,
    succeed_tests: 39,
  },
  {
    id: 3,
    name: "Kayley",
    start_date: "2021-01-07T12:24:31Z",
    duration: 373056,
    failed_tests: 7,
    succeed_tests: 32,
  },
  {
    id: 4,
    name: "Cully",
    start_date: "2021-04-18T00:33:10Z",
    duration: 391745,
    failed_tests: 6,
    succeed_tests: 38,
  },
  {
    id: 5,
    name: "Kristo",
    start_date: "2021-05-16T05:54:27Z",
    duration: 302182,
    failed_tests: 7,
    succeed_tests: 39,
  },
  {
    id: 6,
    name: "Piggy",
    start_date: "2021-04-26T10:17:23Z",
    duration: 549027,
    failed_tests: 0,
    succeed_tests: 43,
  },
  {
    id: 7,
    name: "Mahala",
    start_date: "2021-04-25T05:03:10Z",
    duration: 67444,
    failed_tests: 5,
    succeed_tests: 48,
  },
  {
    id: 8,
    name: "Gus",
    start_date: "2021-08-11T08:25:35Z",
    duration: 151356,
    failed_tests: 3,
    succeed_tests: 49,
  },
  {
    id: 9,
    name: "Annamarie",
    start_date: "2020-10-30T10:23:33Z",
    duration: 583261,
    failed_tests: 3,
    succeed_tests: 40,
  },
  {
    id: 10,
    name: "Orville",
    start_date: "2020-11-02T05:46:51Z",
    duration: 190568,
    failed_tests: 1,
    succeed_tests: 50,
  },
];
export default function RightContainer() {
  const { id } = useParams();

  const [cardData, setCardData] = useState([]);
  const [executionId, setExecutionId] = useState(0);
  const [executionData, setExecutionData] = useState({});
  const successData = executionData?.endpoints?.filter(
    (data) => data.status === "SUCCESS"
  );
  const failedData = executionData?.endpoints?.filter(
    (data) => data.status !== "SUCCESS"
  );
  const fetchData = async () => {
    try {
      let response = await axios.get(
        `https://my.api.mockaroo.com/organizations/${id}/reports.json?key=2e435a20`
      );
      setCardData(response.data);
    } catch (e) {
      setCardData(dummyCardData);
    }
  };
  const fetchExecutionData = async () => {
    try {
      let response = await axios.get(
        `https://my.api.mockaroo.com/organizations/${id}/reports/${executionId}/details.json?key=2e435a20`
      );
      setExecutionData(response.data);
    } catch (e) {
      setExecutionData(dummyData);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  useEffect(() => {
    if (executionId) fetchExecutionData();
  }, [executionId]);

  return (
    <div className="organisation-rightContainer">
      <RightHeader
        executionData={executionData}
        setExecutionData={setExecutionData}
        setExecutionId={setExecutionId}
      />
      {executionData.endpoints?.length > 0 ? (
        <div className="organisation-card">
          <ExecDataComp
            data={successData}
            success={true}
            totalCount={executionData?.endpoints?.length}
          />
           <ExecDataComp
            data={failedData}
            success={false}
            totalCount={executionData?.endpoints?.length}
          />
        </div>
      ) : (
        <div className="organisation-card">
          {cardData.map((data, index) => (
            <Cards key={index} data={data} setExecutionId={setExecutionId} />
          ))}
        </div>
      )}
    </div>
  );
}
