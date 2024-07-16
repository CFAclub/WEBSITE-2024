import PropTypes from "prop-types";

const WHATWEDO = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "6.1px 24px 0px",
        boxSizing: "border-box",
        position: "relative",
        gap: "19px",
        flexShrink: "0",
        maxWidth: "100%",
        zIndex: "7",
        marginTop: "-375.4px",
        textAlign: "left",
        fontSize: "50px",
        color: "#fff",
        fontFamily: "Montserrat",
      }}
      className={className}
    >
      <div
        style={{
          width: "calc(100% - 991.9px)",
          height: "1440px",
          position: "absolute",
          margin: "0",
          top: "6.03px",
          right: "-450px",
          left: "1441.9px",
          filter: "blur(250px)",
          background:
            "conic-gradient(from 134.42deg at 50% 50%, rgba(42, 64, 108, 0.42) -45.35deg, rgba(42, 64, 108, 0.42) 22.93deg, rgba(105, 131, 202, 0.45) 150.84deg, rgba(105, 131, 202, 0.09) 159.84deg, rgba(0, 61, 42, 0.23) 209.65deg, rgba(27, 79, 144, 0.43) 271.22deg, rgba(42, 64, 108, 0.42) 314.65deg, rgba(42, 64, 108, 0.42) 382.93deg)",
          transform: " rotate(90.2deg)",
          transformOrigin: "0 0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 10.9px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <h1
          style={{
            margin: "0",
            position: "relative",
            fontSize: "inherit",
            lineHeight: "40px",
            fontWeight: "700",
            fontFamily: "inherit",
            zIndex: "1",
          }}
        >{`WHAT WE DO `}</h1>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "15px",
          maxWidth: "100%",
          fontSize: "25px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "40px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            zIndex: "1",
          }}
        >
          The FINANCE AND QUANT division is your gateway to mastering advanced
          quantitative skills, particularly in stochastic modeling and analysis.
          Our division offers hands-on workshops and intensive training
          sessions, diving deep into the mathematical complexities of stochastic
          processes. Members learn to develop robust financial models and make
          informed decisions amidst market uncertainties. We also focus on
          trading strategies, emphasizing rigorous back-testing methodologies
          using state-of-the-art software and datasets.
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: "90px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
            gap: "33.7px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "1px",
              position: "relative",
              borderTop: "1px solid #fff",
              boxSizing: "border-box",
              zIndex: "1",
            }}
          />
          <div
            style={{
              width: "100%",
              position: "absolute",
              margin: "0",
              bottom: "0px",
              left: "0px",
              lineHeight: "40px",
              display: "inline-block",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              zIndex: "1",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>Join us</span> to
            enhance your skills, network with professionals, and prepare for a
            successful career in finance and quantitative analysis.
          </div>
          <div
            style={{
              width: "1036.4px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "5.1px",
                width: "6.2px",
                position: "relative",
                zIndex: "1",
              }}
              alt=""
              src="/src/assets/fin/vector-3.svg"
            />
          </div>
        </div>
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "1px solid #000",
          padding: "15px 57px",
          backgroundColor: "#fff",
          width: "555px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "70px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <div
          style={{
            height: "58.7px",
            width: "555px",
            position: "relative",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "70px",
            backgroundColor: "#fff",
            border: "1px solid #000",
            boxSizing: "border-box",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <b
          style={{
            flex: "1",
            position: "relative",
            fontSize: "30px",
            lineHeight: "25px",
            display: "inline-block",
            fontFamily: "Inter",
            color: "#000",
            textAlign: "center",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          Collaborate with us!
        </b>
      </button>
    </div>
  );
};

WHATWEDO.propTypes = {
  className: PropTypes.string,
};

export default WHATWEDO;
