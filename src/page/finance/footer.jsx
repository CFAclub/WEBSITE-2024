import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      style={{
        alignSelf: "stretch",
        backgroundColor: "#1a2d2c",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "36px 50px 16px",
        boxSizing: "border-box",
        position: "relative",
        gap: "66px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "30px",
        color: "#fff",
        fontFamily: "Montserrat",
      }}
      className={className}
    >
      <div
        style={{
          height: "301px",
          width: "1440px",
          position: "relative",
          backgroundColor: "#1a2d2c",
          display: "none",
          maxWidth: "100%",
          zIndex: "0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "14px 0px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <b style={{ position: "relative", lineHeight: "30px", zIndex: "1" }}>
            Our Office
          </b>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "3px",
              fontSize: "15px",
            }}
          >
            <b
              style={{ position: "relative", lineHeight: "30px", zIndex: "2" }}
            >
              <p style={{ margin: "0" }}>
                Indian Institute of Technology Indore
              </p>
              <p style={{ margin: "0" }}>Madhya Pradesh, India - 453552</p>
              <p style={{ margin: "0" }}>+91</p>
              <p style={{ margin: "0", whiteSpace: "pre-wrap" }}>
                {" "}
                cfa@iiti.ac.in
              </p>
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 2px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                    zIndex: "1",
                  }}
                  loading="lazy"
                  alt=""
                  src="/src/assets/fin/social-icons.svg"
                />
                <img
                  style={{
                    height: "24px",
                    width: "24px",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "24px",
                    zIndex: "1",
                  }}
                  alt=""
                  src="/src/assets/fin/social-icons-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "24px",
          width: "24px",
          position: "absolute",
          margin: "0",
          bottom: "85px",
          left: "50px",
          zIndex: "1",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: "2px",
            width: "20px",
            height: "16px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "5px",
              border: "1.5px solid #fff",
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            }}
          />
          <img
            style={{
              position: "absolute",
              height: "28.13%",
              width: "60%",
              top: "31.25%",
              right: "20%",
              bottom: "40.63%",
              left: "20%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              zIndex: "1",
            }}
            alt=""
            src="/src/assets/fin/line.svg"
          />
        </div>
      </div>
      <div
        style={{
          width: "884px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "14px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              width: "792px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              maxWidth: "100%",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "184px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "20px",
                minWidth: "184px",
              }}
            >
              <b
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  zIndex: "1",
                }}
              >
                Quick Links
              </b>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 12px 0px 10px",
                  fontSize: "15px",
                }}
              >
                <b
                  style={{
                    height: "141px",
                    flex: "1",
                    position: "relative",
                    lineHeight: "30px",
                    display: "inline-block",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "0" }}>➤ About Us</p>
                  <p style={{ margin: "0" }}>➤ Team</p>
                  <p style={{ margin: "0" }}>➤ Our Projects</p>
                  <p style={{ margin: "0" }}>➤ Gallery</p>
                </b>
              </div>
            </div>
            <div
              style={{
                height: "205px",
                width: "427px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "0px 0px 1px",
                boxSizing: "border-box",
                minWidth: "427px",
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  flex: "1",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                  zIndex: "1",
                }}
                loading="lazy"
                alt=""
                src="/src/assets/fin/rectangle-20.svg"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            fontSize: "18px",
            lineHeight: "30px",
            fontWeight: "300",
            display: "inline-block",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >{`Copyright © 2019-2024 Consulting, Finance & Analytics Club, IIT Indore`}</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
