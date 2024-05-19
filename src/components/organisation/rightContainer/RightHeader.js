import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function RightHeader({
  executionData,
  setExecutionData,
  setExecutionId,
}) {
  const isfailed = executionData.endpoints?.find((data) =>
    ["ERROR", "FAILURE"].includes(data.status)
  );

  const handleClick = () => {
    setExecutionData({});
    setExecutionId(0);
  };
  return (
    <div className="organisation-headingContainer">
      <p className="organisation-testText" onClick={handleClick}>
        Test Reports
      </p>
      {executionData.endpoints?.length > 0 ? (
        <div className="organisation-headingSubContainer">
          <ChevronRightIcon />
          <p className="organisation-execText">Execution #{executionData.id}</p>
          <div
            className={`organisation-failedButton ${
              !isfailed && "organisation-successButton"
            }`}
          >
            {isfailed ? (
              <CancelIcon className="organisation-failIcon" />
            ) : (
              <CheckCircleIcon className="organisation-failIcon" />
            )}{" "}
            {isfailed ? "FAILED" : "PASSED"}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
