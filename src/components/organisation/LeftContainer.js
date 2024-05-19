import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useParams } from "react-router-dom";

export default function LeftContainer() {
  const { name } = useParams();

  return (
    <div className="organisation-leftContainer">
      <p className="organisation-heading">Levo</p>
      <p className="organisation-name">{name}</p>
      <div className="organisation-reports">
        <ArrowRightIcon className="organisation-reportsIcon" />
        <p className="organisation-testName">Test Reports</p>
      </div>
    </div>
  );
}
