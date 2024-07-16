import PropTypes from "prop-types";

const TeamName = ({ className = "" }) => {
  return (
    <header
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "0px 47px 51.8px",
        boxSizing: "border-box",
        maxWidth: "100%",
      }}
      className={className}
    >
      <nav
        style={{
          margin: "0",
          width: "725px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 2px 0px 0px",
          boxSizing: "border-box",
          gap: "24px",
          maxWidth: "100%",
          textAlign: "center",
          fontSize: "25px",
          color: "#e2e3e6",
          fontFamily: "'Anek Devanagari'",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            lineHeight: "30px",
            color: "inherit",
            display: "inline-block",
            minWidth: "60px",
            zIndex: "1",
          }}
        >
          C-F-A
        </a>
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            lineHeight: "30px",
            color: "inherit",
            display: "inline-block",
            minWidth: "87px",
            zIndex: "1",
          }}
        >
          Projects
        </a>
        <a
          style={{
            textDecoration: "none",
            position: "relative",
            lineHeight: "30px",
            color: "inherit",
            display: "inline-block",
            minWidth: "72px",
            zIndex: "1",
          }}
        >
          Events
        </a>
        <a
          style={{
            textDecoration: "none",
            flex: "1",
            position: "relative",
            lineHeight: "30px",
            color: "inherit",
            display: "inline-block",
            minWidth: "108px",
            zIndex: "1",
          }}
        >
          Resources
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 5px 0px 0px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              lineHeight: "30px",
              color: "inherit",
              display: "inline-block",
              minWidth: "57px",
              zIndex: "1",
            }}
          >
            Team
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 3px 0px 0px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              lineHeight: "30px",
              color: "inherit",
              display: "inline-block",
              minWidth: "73px",
              zIndex: "1",
            }}
          >
            Gallery
          </a>
        </div>
        <a
          style={{
            textDecoration: "none",
            flex: "1",
            position: "relative",
            lineHeight: "30px",
            color: "inherit",
            display: "inline-block",
            minWidth: "114px",
            whiteSpace: "nowrap",
            zIndex: "1",
          }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

TeamName.propTypes = {
  className: PropTypes.string,
};

export default TeamName;
