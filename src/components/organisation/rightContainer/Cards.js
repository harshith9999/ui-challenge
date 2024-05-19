import { formatDuration, timeAgo } from "../../Utils";

export default function Cards({ data, setExecutionId }) {
  const handleSelect = () => {
    setExecutionId(data.id);
  };
  return (
    <div className="organisation-cardContainer" onClick={handleSelect}>
      <div>
        <p className="organisation-cardHeader">Execution # {data.id}</p>
        <p className="organisation-cardTime">
          {timeAgo(data.start_date)} - {formatDuration(data.duration)}
        </p>
      </div>
      <div className="organisation-cardSubContainer">
        <p className="organisation-successText">{data.succeed_tests} passed</p>
        <p className="organisation-failText">{data.failed_tests} failed</p>
      </div>
    </div>
  );
}
