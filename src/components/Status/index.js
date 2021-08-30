import PropTypes from "prop-types";
import cn from "classnames";
import { EllipsisOutlined } from "@ant-design/icons";

import "./Status.scss";

const Status = ({ online, fullname }) => (
  <div className="chat__dialog-header">
    <div />
    <div className="chat__dialog-header--centered">
      <b className="chat__dialog-header-username">{fullname}</b>
      <div className="chat__dialog-header-status">
        <span className={cn("status", { "status--online": online })}>
          {online ? "онлайн" : "не в сети"}
        </span>
      </div>
    </div>
    <EllipsisOutlined style={{ fontSize: 24 }} />
  </div>
);

Status.propTypes = {
  online: PropTypes.bool,
};

export default Status;
