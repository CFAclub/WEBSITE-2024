import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 20px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "70px",
        color: "#fff",
        fontFamily: "'Anek Devanagari'",
      }}
      className={className}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "63.2px 0px 495px",
          boxSizing: "border-box",
          position: "relative",
          minHeight: "639px",
          flexShrink: "0",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "905px",
            height: "100%",
            position: "absolute",
            margin: "0",
            top: "0px",
            bottom: "0px",
            left: "179px",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "16.3px",
              left: "594.7px",
              width: "6.2px",
              height: "5.1px",
              zIndex: "1",
            }}
            alt=""
            src="/src/assets/fin/src/assets/fin/group-1.svg"
          />
          <img
            style={{
              position: "absolute",
              height: "calc(100% - 20.6px)",
              top: "8.8px",
              bottom: "11.8px",
              left: "112.1px",
              maxHeight: "100%",
              width: "751.3px",
              zIndex: "2",
            }}
            alt=""
            src="/src/assets/fin/group-1.svg"
          />
          <img
            style={{
              position: "absolute",
              top: "50.6px",
              left: "57px",
              width: "790.8px",
              height: "558.1px",
              zIndex: "4",
            }}
            alt=""
            src="/src/assets/fin/group-2.svg"
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              zIndex: "5",
            }}
            alt=""
            src="/src/assets/fin/group-3.svg"
          />
          <img
            style={{
              position: "absolute",
              top: "75.9px",
              left: "93.1px",
              width: "718.7px",
              height: "507.4px",
              zIndex: "6",
            }}
            alt=""
            src="/src/assets/fin/group-4.svg"
          />
        </div>
        <h1
          style={{
            margin: "0",
            alignSelf: "stretch",
            position: "relative",
            fontSize: "inherit",
            lineHeight: "80px",
            fontWeight: "800",
            fontFamily: "inherit",
            zIndex: "7",
          }}
        >
          FINANCE AND QUANT
        </h1>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
