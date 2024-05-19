import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { formatDuration } from "../../Utils";

export default function ExecDataComp({ data, success, totalCount = 2 }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="execDataComp-container">
      <div className="execDataComp-subContainer">
        <div className="execDataComp-arrowIcon" onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </div>
        {success ? (
          <div className="execDataComp-subContainer">
            <CheckCircleIcon className="execDataComp-successColor" />
            <p>
              Passed Tests {data?.count}/{totalCount}
            </p>
          </div>
        ) : (
          <div className="execDataComp-subContainer">
            <CancelIcon className="execDataComp-failColor" />
            <p className="execDataComp-heading">
              Failed Tests {data?.count}/{totalCount}
            </p>
          </div>
        )}
      </div>
      {open &&
        data?.map((item, index) => (
          <div
            key={index}
            className={`execDataComp-urls ${
              success ? "execDataComp-successUrls" : "execDataComp-failUrls"
            }`}
          >
            <p>{item.url} </p>
            <p>{formatDuration(item.duration)}</p>
          </div>
        ))}
    </div>
  );
}
